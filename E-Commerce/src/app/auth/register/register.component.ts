import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  checkControl(control: string): boolean{
    let errors = this.form.controls[control]?.errors;
    if(errors != undefined){
      if(errors["required"]){
        return true;
      }
    }
    return false;
  }

  checkPatternControl(control: string): boolean{
    let errors = this.form.controls[control]?.errors;
    if(errors != undefined){
      if(errors["pattern"]){
        return true;
      }
    }
    return false;
  }

  checkValidConfirmPasswordControl(): boolean{
    let errors = this.form.errors;
    if(errors != undefined){
      if(errors["misMatch"]){
        return true;
      }
    }
    return false;
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)]],
      password:['',[Validators.required]],
      confirmPassword:[''],
    }, {validator:[ConfirmPasswordValidator]});

    this.form.get("password")?.valueChanges.subscribe(selectedValue => {
      this.form.controls['confirmPassword'].setValidators(
        [Validators.required,Validators.pattern(selectedValue)]);
      this.form.controls['confirmPassword'].updateValueAndValidity();
    });
  }
  onRegister(){
    if(!this.form.valid) return;

    let existedEmail = this.userService.isEmailExistedInUsers(this.form.controls["email"].value);
    if(existedEmail){
      alert("This email already existed please choose another one");
      return;
    }
    this.userService.register(this.form.value);
    this.form.reset();
    this.router.navigateByUrl("/auth/login");
  }


  get name(){
    return this.form.controls['name'];
  }

  get email(){
    return this.form.controls['email'];
  }

  get password(){
    return this.form.controls['password'];
  }

  get confirmPassword(){
    return this.form.controls['confirmPassword'];
  }
}
export function ConfirmPasswordValidator(control:AbstractControl){
    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword')
    if(password?.pristine || confirmPassword?.pristine) {
        return null;
    }else{
        return password && confirmPassword && password.value !==confirmPassword.value 
        ? {'misMatch':true} 
        :null
    }
    
  }
  

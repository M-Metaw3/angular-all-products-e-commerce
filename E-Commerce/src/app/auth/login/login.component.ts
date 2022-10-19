import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit ,DoCheck {
form! :FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private userService:UserService,
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
  initializeForm(){
    this.form = this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)]],
      password:['',[Validators.required]],
    })
    }

    onLogin(){
      location.reload();    
      if(!this.form.valid) return;
      let user = this.userService.login(this.form.value);
      if(!user){
        alert("Invalid credentials");
        return;
      }
      this.userService.saveUserLoginData(user);
      this.form.reset();
      this.router.navigateByUrl("/products/product");
    }
    ngDoCheck(): void {
    // return this.onLogin()
    }

    get email(){
      return this.form.controls['email'];
    }
  
    get password(){
      return this.form.controls['password'];
    }
  
    
}

import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from '../Services/AddressService/address.service';

declare var paypal:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})

 
export class PaymentComponent implements OnInit ,DoCheck{
  @ViewChild('paypal', { static: true })
  paypalRef!: ElementRef;
  total:any=0;
  // cridet:boolean=false;
  // cod:boolean=false;
  type:boolean=false;
  isAddress:boolean=false;
  isConfirmed:boolean=false;

  constructor(private fb:FormBuilder ,private router:Router ,private addressservice:AddressService) { }
  cities=["asyut","Cairo","Giza","Alexandria","Mansoura","Hurghada"];
  buldingPatern="^[0-9]+$";
  cardNoPatern="^[0-9]{16}"
  mobilePatern="^[0-9]{11}"

  userDataForm=this.fb.group({
    userName:['',[Validators.required]],
    city:['asyut'],
    Building:['',[Validators.required, Validators.pattern(this.buldingPatern)]],
    Street:['',[Validators.required]],
    mobile:['',[Validators.required,Validators.pattern(this.mobilePatern)]]

  })

  get userName (){
    return this.userDataForm.get('userName')
  }  
  get city(){
    return this.userDataForm.get('city')
  }
  get Building(){
    return this.userDataForm.get('Building')
  } 
  get Street(){
    return this.userDataForm.get('Street')
  } 
  get mobile(){
    return this.userDataForm.get("mobile")
  }  
  
  
  addAdress(){
    if(!this.userDataForm.valid) return;

    this.addressservice.addAdress(this.userDataForm.value);
    this.isAddress=true;
  }
  goToStep2(){
    // if(!this.login)
    // this.router.navigateByUrl('/'+this.id);
  }
  onChange(e:any){
    // this.type= e.target.value;
    if(e.target.value=="cod")
    this.type= true;
    if(e.target.value=="cridet")
    this.type= true;
  }
  closeForm(){
    // this.cridet= false;

  }

  cardForm=this.fb.group({
    cardName:['',[Validators.required]],
    cardNo:['',[Validators.required, Validators.pattern(this.cardNoPatern)]],

  })
  get cardName(){
    return this.cardForm.get("cardName")
  }

  get cardNo(){
    return this.cardForm.get("cardNo")
  }

  confirmed(){
this.isConfirmed=true;
  }
  ngDoCheck(): void {
    this.getTotalPrice()
    
  }

  ngOnInit(): void {
    paypal.Buttons(
      {
        style:{
          // layout:'horizontal',
          // shap:'rect',
          // labbel:'paypal'
        },
        // creatOrder:(data:any,actions:any)=>{
        //   return actions.order.create({
        //     purchase_units:[
        //       {
        //           amount:{
        //             value:'1000',
        //             Currency_code:'usd'
        //           }
        //       }
        //     ]
        //   })
        // }
      }

    ).render(this.paypalRef.nativeElement)

  }
  getTotalPrice(){
    this.total=localStorage.getItem("total")
    console.log(this.total)
  }
}


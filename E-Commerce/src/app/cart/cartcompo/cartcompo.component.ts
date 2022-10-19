import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-cartcompo',
  templateUrl: './cartcompo.component.html',
  styleUrls: ['./cartcompo.component.scss']
})
export class CartcompoComponent implements OnInit ,DoCheck{
  getcartarr:any[]=[]
amount:any[]=[]
total:any=0
totalnumber:any=0;
stock:any[]=[]
stockchecker:boolean=false
  constructor() { }

  ngOnInit(): void {

   this. getcardetails()

  } 

  ngDoCheck(): void {
   this. getcardtotlal()
   this.totalnumber
  }

///////////////////////////////////////////////////////////////////////////////////////////////////

  getcardetails(){
    
    this.getcartarr= JSON.parse(localStorage.getItem("cart")!)
    
   console.log()
    this.getcardtotlal()
  }


////////////////////////////////////////////////////////////////////////////////
  deleteproduct(i:number){
   
      this.totalnumber-=this.getcartarr[i].price
 location.reload();
  this.getcartarr.splice(i,1)
  localStorage.setItem("cart",JSON.stringify(this.getcartarr))
  localStorage.setItem('total',JSON.stringify(this.totalnumber))
  
  }
  getcardtotlal(){
this.totalnumber=0
for(let y in this.getcartarr){
this.totalnumber+=this.getcartarr[y].price
localStorage.setItem("cart",JSON.stringify(this.getcartarr))
localStorage.setItem('total',JSON.stringify(this.totalnumber))
}

for (let x in this.amount){
  this.totalnumber+=this.amount[x]
  localStorage.setItem("cart",JSON.stringify(this.getcartarr))
  localStorage.setItem('total',JSON.stringify(this.totalnumber))

}
 
  }
////////////////////////////////////////////////////
clearproduct(){
  this.getcartarr=[]
  localStorage.setItem("cart",JSON.stringify(this.getcartarr))
 this. getcardtotlal()
 location.reload();

}

inp(i:any,x:any){

this.amount[i]= this.getcartarr[i].price*x.target.value
  
  console.log(this.amount[i])
  this.stock[i]=this.getcartarr[i].stock-x.target.value
  if(this.getcartarr[i].stock==0){
    alert("hi")
  }

}

}

import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { IUsers } from 'src/app/Interfaces/Users';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck {
  getcartarr:any[]=[]
  cartlengt:number=0;
  @Input() user!: IUsers|undefined;
  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    this.user = this.userService.getLoginUserData();
  }

  logout(){
    this.userService.logout();
    this.user = this.userService.getLoginUserData();
  }
  
  getUserName(){
   return this.user?.name;
  
  }
  
  ngDoCheck(): void {
  // this.cartlength()
  this.cartlengt
 
  
}
 cartlength(){
    
    this.getcartarr= JSON.parse(localStorage.getItem("cart")!)
    this.cartlengt=this.getcartarr.length;
    console.log(this.cartlengt)

  }
}

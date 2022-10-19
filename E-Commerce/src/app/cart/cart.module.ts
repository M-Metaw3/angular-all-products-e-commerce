import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartcompoComponent } from './cartcompo/cartcompo.component';
import {  FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    CartcompoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
  ]
})
export class CartModule { }

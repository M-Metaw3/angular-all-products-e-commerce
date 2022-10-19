import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { PaymentComponent } from './payment/payment.component';
import { CartcompoComponent } from './cart/cartcompo/cartcompo.component';
import { HomeComponent } from './main/Components/home/home.component';
import { ErrorComponent } from './main/Components/error/error.component';
import { NewstyleComponent } from './products/newstyle/newstyle.component';


const routes: Routes = [

  {path:'',component:NewstyleComponent},



  {path:'auth/register',component:RegisterComponent},
  {path:'auth/login',component:LoginComponent},
  {path:'products/product',component:ProductComponent},
  {path:'products/:id',component:ProductListComponent},
  {path:'products/product-list',component:ProductListComponent},
  {path:'cart',component:CartcompoComponent},
  {path:'home',component:NewstyleComponent},
  {path:'payment', component:PaymentComponent, canActivate: [AuthGuard]},
  {path:'**',component:ErrorComponent},
  // {path:'products/Trials',component:NewstyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

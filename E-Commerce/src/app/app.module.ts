import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import {HttpClientModule} from '@angular/common/http'
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './main/Components/header/header.component';
import { FooterComponent } from './main/Components/footer/footer.component';
import { HomeComponent } from './main/Components/home/home.component';
import { NewstyleComponent} from './products/newstyle/newstyle.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

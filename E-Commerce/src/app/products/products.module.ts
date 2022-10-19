import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewstyleComponent } from './newstyle/newstyle.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    NewstyleComponent
  ],
  imports: [
    CommonModule,
    ],
  exports:[
    ProductComponent,
    ProductListComponent,
    NewstyleComponent
  ]
})
export class ProductsModule { }

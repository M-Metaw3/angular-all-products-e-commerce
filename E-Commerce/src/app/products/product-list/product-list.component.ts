import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from 'src/app/SharedServices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }
  productsData: any;
  selected_product_id:any;
 
  ngOnInit(): void {
   
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selected_product_id=params.get('id');
      console.log(this.selected_product_id+"woo1")

      this.getItRight()
    
    });
  }
  
getItRight(){
  this.productService.getfordesctipyion(this.selected_product_id).subscribe(  
    productData=>{
      this.productsData= productData;
      console.log(productData)
    }
  )   
}


  }



import { Component, OnInit } from '@angular/core';
import { ParamMap, Router,ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Shared Interfaces&enums/iproduct';
import { ProductService } from 'src/app/SharedServices/product.service';
@Component({
  selector: 'app-newstyle',
  templateUrl: './newstyle.component.html',
  styleUrls: ['./newstyle.component.scss']
})
export class NewstyleComponent implements OnInit {
  // activatedRoute: any;
  selected_comment_id: any;
  product_id:any;
  selected_product_id:any;
  itemcart:any[]=[];
  product:any[]=[];
  productcat:any[]=[];
  productdetails:any[]=[];
  productalll:any[]=[]
  
  show:number=-1
  searchName:string=''

  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }
  // Products:IProduct[];
  productsData: any;
  ngOnInit(): void {


this. getalldata()

  
    this.productService.getproductcategory().subscribe((data:any)=>{
   
      console.log(data)
      this.productcat= data
      console.log(this.productcat)
    })
 
  }
    

    goToProductDescription(product_id:any)
    {
    //go to department details page and pass the id parameter to it
    this.router.navigate(["products",product_id]);
  }
  productPost:any;
  createProduct(){
    let productTitle:any="Dell Laptop";
    this.productService.postProduct(productTitle).subscribe(
      data=>{
        // console.log(data);
        this.productPost=data
        
      }
      );
    }
    
    
    
  cartlocalstorage(item:any){
    
    if ("cart" in localStorage){
      this.itemcart= JSON.parse(localStorage.getItem("cart")!)
      let findproduct = this.itemcart.find(itd=>itd.id ==item.id)
      if(findproduct){
        alert("this item is exsit")
      }else{
        this.itemcart.push(item)
      localStorage.setItem("cart",  JSON.stringify( this.itemcart))
  }
  
  
}
else{
  this.itemcart.push(item)
  localStorage.setItem("cart",  JSON.stringify( this.itemcart))
}


// console.log(item)

}




category(val:any){
  
    let name=  val.target.innerText
    console.log(name)

    this.productService.getproductcategorys(name).subscribe((res:any)=>{

this.productalll=res.products
      // console.log(this.product)
    })
    
    
  }
  
  
  getalldata(){
  this.productService.getallproduct().subscribe(
    (productData:any)=>{
      this.productalll= productData.products;
      console.log(this.productalll)
    

    }
    )
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selected_product_id=params.get('id');
    });
  }


  display(index:number){
  this.show=index;

  setTimeout(()=>{
    this.show=-1
  },2000)
  }


  }











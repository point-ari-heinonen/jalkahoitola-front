import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../classes';
import { ProductGroup } from '../classes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit{
  @Input() groupId2: string;
  
  constructor(private httpClient: HttpClient){}
  getProductsInGroupUrl: string='http://pointfootapi.azurewebsites.net/api/getproductsingroup/';
  postAddProductUrl: string='http://pointfootapi.azurewebsites.net/api/product';
  products: Product[];
  selectedProduct: Product;
  addProduct = new Product;
  
   
  submitProduct(){
      this.addProduct.Nmae = "posttest";
      this.addProduct.Description = "postdesc";
      this.addProduct.GroupId = 13;
      this.addProduct.Quantity = 123;
    console.log("submitProduct "+this.addProduct.Nmae);
    this.httpClient.post(this.postAddProductUrl,this.addProduct)
    .subscribe();
   }
  getProductsInGroup(id: any){
    console.log("getProductsIngroup id:"+id);
    this.httpClient.get(this.getProductsInGroupUrl+id)
    .subscribe(
      (data: Product[])=> {
        console.log(data);
        this.products=data;

      }
    )
  }
  onProductSelect(product: Product){
    this.selectedProduct=product;
    console.log("onProductSelect");
  }
 ngOnChanges(): void{
  console.log("productlist.component.ts ngOnChanges groupid: " + this.groupId2);
  if(this.groupId2 != undefined){
    this.getProductsInGroup(this.groupId2);
   }
 }
 
  ngOnInit(): void {
    console.log("productlist.component.ts ngOnInit: " + this.groupId2);
    if(this.groupId2 != undefined){
    this.getProductsInGroup(this.groupId2);
    }

  }
  
}
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../classes';
import { ProductGroup } from '../classes';
import { HttpClient } from '@angular/common/http';
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
  products: Product[];
  selectedProduct: Product;
  
  
 /******************************************/  
  addProductName: string;
  addProductDescription: string;
  addProductQuantity: number;
  addProductUnitOfMeasure: string;
  addProductEntery_Date: Date;
  addProductExpire: Date;
  addProductPerson_Name: string;
  
  onAddProductNameKeyUp(event: any){this.addProductName=event.target.value;}
  onAddProductDescriptionKeyUp(event: any){ this.addProductDescription=event.target.value;}
  onAddProductQuantityKeyUp(event: any){ this.addProductQuantity=event.target.value;}
  onAddProductUnitOfMeasureKeyUp(event: any){ this.addProductUnitOfMeasure=event.target.value;}
  onAddProductEntery_DateKeyUp(event: any){ this.addProductEntery_Date=event.target.value;}
  onAddProductExpireKeyUp(event: any){ this.addProductExpire=event.target.value;}
  onAddProductPerson_NameKeyUp(event: any){ this.addProductPerson_Name=event.target.value;}
   
  
  submitProduct(){
    console.log("submitProduct "+this.addProductName);
    
  }
 
 /******************************************/
 
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
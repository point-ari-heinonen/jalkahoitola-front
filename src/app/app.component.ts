import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductGroup } from './classes';
import { Product } from './classes';
import {Http} from '@angular/http';
import {Response}  from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  title = 'Foot (title variable)';
  productGroupUrl: string='http://pointfootapi.azurewebsites.net/api/productgroup/';
  getProductsInGroupUrl: string='http://pointfootapi.azurewebsites.net/api/getproductsingroup/';
  
  constructor(private httpClient: HttpClient){}
  productGroupId: string ="0";
  productGroups: ProductGroup[];
  products: Product[];
  selectedProductGroup: Number;
  //onProductGroupKeyUp(event: any){ this.productGroupId=event.target.value;  }
  
  
  getProductGroup(id: any){
    console.log(this.productGroupId);
    this.httpClient.get(this.productGroupUrl+id)
    .subscribe(
      (data:ProductGroup[]) => {
        console.log(data);
        this.productGroups=data;


      }
    )
  }

  onSelect(productGroup: Number): void {
    this.selectedProductGroup=productGroup;
    console.log("app.component.ts onSelect:" + this.selectedProductGroup);
  }
  
  ngOnInit(): void {
    this.getProductGroup(0);
         
   } 
}

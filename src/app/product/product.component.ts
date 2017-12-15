import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductGroup } from '../classes';
import { Product } from '../classes';
//import {Http} from '@angular/http';
import {Response}  from '@angular/http';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  
})

export class ProductComponent implements OnChanges{
    @Input() productId: string;
    constructor(private httpClient: HttpClient){}
    productUrl: string='http://pointfootapi.azurewebsites.net/api/product/';
    oneProduct: Product[];
    productId2: string;
    


    getProduct(id: any){
        console.log("OOOOOOOOOOOOOOOOO getProduct id:"+id);
        this.httpClient.get(this.productUrl+id)
        .subscribe(
          (data: Product[])=> {
            console.log(data);
            this.oneProduct=data;
            
            
           }
        )
    }

    ngOnChanges(): void{
        
        console.log("product.component ngOnChanges:" + this.productId)
        if(this.productId != undefined){
            this.getProduct(this.productId);
        }
    
    }
    
    ngOnInit(): void{
        console.log("product.component ngOnInit:" + this.productId)
        if(this.productId != undefined){
            this.getProduct(this.productId);
        }
    }
    
}
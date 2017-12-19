import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {ReceivedAmount} from '../classes';
import { HttpClient } from '@angular/common/http';
import {async} from '@angular/core/testing';

@Component({
  selector: 'app-received-amount',
  templateUrl: './received-amount.component.html',
  styleUrls: ['./received-amount.component.css']
})
export class ReceivedAmountComponent implements OnInit {
  @Input() productId2: number;
  shipments: ReceivedAmount[];
  shipment: ReceivedAmount;
  isUpdatedFlag: number;
  isUpdatedListFlag: number;
  constructor(private httpClient: HttpClient) { }
  getShipmentUrl: string = 'http://pointfootapi.azurewebsites.net/api/shipmentsforproduct/'
  takeProductFromStockUrl: string ="http://pointfootapi.azurewebsites.net/api/reduceproduct?saapumiseranid="

  async takeProductFromStock(id: any){
    console.log("takeProductFromStock:" + id)
     await this.httpClient.get(this.takeProductFromStockUrl+id)
    .subscribe((data: number)=>{
      this.isUpdatedFlag=data;
    } );
    this.isUpdatedListFlag=0;
  
    
     this.getShipment(this.productId2);
    
    
    

  }
  getShipment(id: any){
    console.log("GETSHIPMENT:" + id)
    this.httpClient.get(this.getShipmentUrl+id)
    .subscribe(
      (data: ReceivedAmount[])=>{
        console.log(data);
        this.shipments=data;
        this.isUpdatedListFlag=1;
      }
    )
    
  }

   async ngOnInit() {
   await this.getShipment(this.productId2);
  }
  
  async ngOnChange(){
    await this.getShipment(this.productId2);
  }
  
}

/*
getProductsInGroup(id: any){
  console.log("getProductsIngroup id:"+id);
  this.httpClient.get(this.getProductsInGroupUrl+id)
  .subscribe(
    (data: Product[])=> {
      console.log(data);
      this.products=data;
    }
    */
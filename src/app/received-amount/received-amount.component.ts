import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {ReceivedAmount} from '../classes';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-received-amount',
  templateUrl: './received-amount.component.html',
  styleUrls: ['./received-amount.component.css']
})
export class ReceivedAmountComponent implements OnInit {
  @Input() productId2: number;
  shipments: ReceivedAmount[];
  shipment: ReceivedAmount;
  constructor(private httpClient: HttpClient) { }
  getShipmentUrl: string = 'http://pointfootapi.azurewebsites.net/api/shipmentsforproduct/'
  takeProductFromStockUrl: string ="http://pointfootapi.azurewebsites.net/api/reduceproduct?saapumiseranid="

  takeProductFromStock(id: any){
    console.log("takeProductFromStock:" + id)
    this.httpClient.get(this.takeProductFromStockUrl+id)
    .subscribe( );
    this.getShipment(this.productId2);
    

  }
  getShipment(id: any){
    console.log("GETSHIPMENT:" + id)
    this.httpClient.get(this.getShipmentUrl+id)
    .subscribe(
      (data: ReceivedAmount[])=>{
        console.log(data);
        this.shipments=data;
      }
    )
    
  }

  ngOnInit() {
   this.getShipment(this.productId2);
  }
  ngOnChange(){
    this.getShipment(this.productId2);
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
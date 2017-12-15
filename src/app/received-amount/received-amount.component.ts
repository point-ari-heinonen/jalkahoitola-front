import { Component, OnInit,Input } from '@angular/core';
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
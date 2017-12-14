import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-received-amount',
  templateUrl: './received-amount.component.html',
  styleUrls: ['./received-amount.component.css']
})
export class ReceivedAmountComponent implements OnInit {
  @Input() productId2: number;
  constructor() { }


  ngOnInit() {
  }

}

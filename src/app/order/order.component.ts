import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  
  orders: Order;
  

  constructor(private _orderService: OrderService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    //const orderId = this._route.snapshot.paramMap.get('id');
    this.orders= {} as Order;
     
  }

  deleteOrder() {
    
  }
}

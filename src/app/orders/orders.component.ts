import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import {Order} from "../models/order";
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ordersList : Order[];

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit() { }

  readOrders() : void{
    this.ordersService.getUnprocessedOrders().subscribe(result => {this.ordersList = result;});
  }

  processedOrder(order: Order){
    localStorage.setItem('idOrder', order.id.toString());
    localStorage.setItem('markaAuto', order.markAuto);
    localStorage.setItem('bodyType', order.bodyType);
    localStorage.setItem('countOfSits', order.countOfSits.toString());
    this.router.navigate(['flight/create']);
  }



}

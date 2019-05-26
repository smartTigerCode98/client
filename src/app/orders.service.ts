import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Order} from "./models/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly _url: string = '/api/orders';

  constructor(private http: HttpClient) { }

  getUnprocessedOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this._url);
  }

}

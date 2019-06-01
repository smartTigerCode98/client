import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly _url: string = '/api/cars';

  constructor(private http: HttpClient) { }

  updateStatusCar(idCar: number, status: boolean):Observable<boolean>{
    const params = new HttpParams().set('idCar', idCar.toString())
      .set('statusCar', status ? "true":"false");
    return this.http.put<boolean>(this._url + "/" + idCar.toString(),null,{params});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Flight} from "./models/flight";
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private readonly _url: string = '/api/flight';

  constructor(private http: HttpClient) { }

  createFlight(idOrder: number, idDriver: number): Observable<boolean> {
    const params = new HttpParams()
      .set('idOrder', idOrder.toString())
      .set('idDriver', idDriver.toString());
    return this.http.post<boolean>(this._url, params);
  }

  getFlight(idDriver: number): Observable<Flight>{
    const params = new HttpParams().set("idDriver", idDriver.toString());
    return this.http.get<Flight>(this._url + "/" + idDriver.toString(), {params});
  }

  updateStatusFlight(idFlight: number, status: boolean, idDriver: number):Observable<boolean>{
    const params = new HttpParams().set('idFlight', idFlight.toString())
      .set('statusFlight', status ? "true":"false")
      .set('idDriver', idDriver.toString());
    return this.http.put<boolean>(this._url + "/" + idFlight.toString(),null,{params});
  }
}

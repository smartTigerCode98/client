import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {Driver} from "./models/driver";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private readonly _url: string = '/api/drivers';

  constructor(private http: HttpClient) { }

  getFreeDrivers(markaAuto: string, bodyType: string, countOfSits: string): Observable<Driver[]> {
    const params = new HttpParams()
      .set('markaAuto', markaAuto)
      .set('bodyType', bodyType)
      .set('countOfSits', countOfSits.toString());
    return this.http.get<Driver[]>(this._url, {params});
  }

  getDriver(idDriver: number): Observable<Driver> {
    const params = new HttpParams()
      .set('idDriver', idDriver.toString());
    return this.http.get<Driver>(this._url + "/" + idDriver.toString(), {params});
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {User} from "./models/user";
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _url: string = '/api/verifyUser';

  private static readonly StorageKeyFirst: string = "id";

  private static readonly StorageKeySecond: string = "role";

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string): Observable<User> {
    const params = new HttpParams().set('email', email).set('password', password);
    return this.http.post<User>(this._url, params);
  }

  public store(id: number, role: string): void {
    localStorage.setItem(UserService.StorageKeyFirst, id.toString());
    localStorage.setItem(UserService.StorageKeySecond, role);
    console.log(localStorage.getItem('role'));
  }

  public unstore(): void {
    localStorage.removeItem(UserService.StorageKeyFirst);
    localStorage.removeItem(UserService.StorageKeySecond);
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('id') != null;
  }
}

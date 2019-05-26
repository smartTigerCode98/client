import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate{

  private readonly _userService: UserService;

  public constructor(userService: UserService, private router: Router)
  {
    this._userService = userService;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    if(!this._userService.loggedIn){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}

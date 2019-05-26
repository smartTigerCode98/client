import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import { NgForm} from '@angular/forms';
import {UserService} from "../user.service";
import {Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private user: User = null;

  private email: string;
  private password: string;
  private readonly notifier: NotifierService;

  constructor(private userService: UserService, private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
    if (localStorage.getItem('role') == 'dispatcher') {
      this.router.navigate(['dispatcher/orders'])
    }
    else if (localStorage.getItem('role') == 'driver') {
      this.router.navigate(['driver'])
    }

  }
  ngOnInit() { }

  login(): void {
    // this.userService.unstore();
    this.userService.getUser(this.email, this.password).subscribe(result => {
      this.user = result;
      if(this.user != null && this.user.role == 'dispatcher'){
        this.userService.store(this.user.id, this.user.role);
        this.router.navigate(['dispatcher/orders']);
      }
      else if(this.user != null && this.user.role == 'driver'){
        this.userService.store(this.user.id, this.user.role);
        this.router.navigate(['driver']);
      }
      if(this.user == null) {
        this.notifier.notify('success', 'Wrong email or password. Try again.');
      }
    });
  }

}

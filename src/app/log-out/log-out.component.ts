import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router){ }

  logout(): void {
    this.userService.unstore();
    this.router.navigate(['/login']);
  }

  ngOnInit() { }

}

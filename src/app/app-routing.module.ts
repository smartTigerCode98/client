import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders/orders.component';
import { FlightCreateComponent } from './flight-create/flight-create.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import {UserGuard} from "./guards/users.guard";
import {DriverAccountComponent} from "./driver-account/driver-account.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dispatcher/orders', component: OrdersComponent, canActivate: [UserGuard] },
  { path: 'driver', component: DriverAccountComponent, canActivate: [UserGuard] },
  { path: 'flight/create', component: FlightCreateComponent },
  { path: 'login', component: LogInComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers:[UserGuard]
})
export class AppRoutingModule { }

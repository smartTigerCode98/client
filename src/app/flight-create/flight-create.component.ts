import { Component, OnInit } from '@angular/core';
import {DriverService} from "../driver.service";
import {Driver} from "../models/driver";
import {FlightService} from "../flight.service";
import {Router} from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent implements OnInit {

  private listDrivers: Driver[];

  private idOrder: number;
  private selectedDriver: number;
  private resultCreateFlight: boolean;
  private readonly notifier: NotifierService;

  constructor(private driverService: DriverService, private flightService: FlightService, private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.idOrder = parseInt(localStorage.getItem('idOrder'));
    this.driverService.getFreeDrivers(localStorage.getItem("markaAuto"),
      localStorage.getItem("bodyType"),
      localStorage.getItem("countOfSits")).subscribe(result => {
        this.listDrivers = result;
        console.log(this.listDrivers);
      if(this.listDrivers.length == 0){
        this.notifier.notify('success', 'Currently there are no free car drivers that meet the requirements of the application');
      }
      });
  }

  onChange(selectedDriver) {
    this.selectedDriver = selectedDriver;
    console.log(this.selectedDriver)
  }

  public confirmOrder(){
    this.flightService.createFlight(this.idOrder, this.selectedDriver).subscribe(result => {this.resultCreateFlight = result;
    if(this.resultCreateFlight == true){
      this.notifier.notify('success', 'Flight successfully completed');
    }else{
      this.notifier.notify('success', 'Error occurred');
    }
    })
  }

  public back(): void{
    this.router.navigate(['/dispatcher/orders'])
  }
}

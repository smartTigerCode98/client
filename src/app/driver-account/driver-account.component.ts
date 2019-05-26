import { Component, OnInit } from '@angular/core';
import {DriverService} from "../driver.service";
import {Driver} from "../models/driver";
import {Flight} from "../models/flight";
import {FlightService} from "../flight.service";
import {CarService} from "../car.service";
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-driver-account',
  templateUrl: './driver-account.component.html',
  styleUrls: ['./driver-account.component.css']
})
export class DriverAccountComponent implements OnInit {

  private driver: Driver;
  private currentFlight: Flight;
  private readonly notifier: NotifierService;
  private resultUpdate: boolean;
  constructor(private driverService: DriverService, private flightService: FlightService, private carService: CarService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.driverService.getDriver(parseInt(localStorage.getItem("id"))).subscribe(result => {
      this.driver = result;
      this.flightService.getFlight(this.driver.id).subscribe(result => this.currentFlight = result);
    })
  }

   public updateStatusFlight() : void {
    this.flightService.updateStatusFlight(this.currentFlight.id, true, this.driver.id).subscribe(result => { this.currentFlight.id = null;
    if(result == true){
      this.notifier.notify('success', 'Status your flight is successfully updated.');
    }
    });
   }

   public myCarIsBroke(){
    this.carService.updateStatusCar(this.driver.idCar, true).subscribe(result => {console.log(result);
      if(result == true){
        this.notifier.notify('success', 'Status your car is successfully updated.');
      }
    });
   }

  public myCarIsWork(){
    this.carService.updateStatusCar(this.driver.idCar, false).subscribe(result => {this.resultUpdate = result;
      if(this.resultUpdate == true){
        this.notifier.notify('success', 'Status your car is successfully updated.');
      }
    });
  }
}

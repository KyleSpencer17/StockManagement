import { Component, OnInit } from '@angular/core';
import { DriversDataService } from 'src/app/Services/Data/drivers-data.service';
import { Router } from '@angular/router';

export class Driver {
  constructor(driverID: number, driverName: String) {

  }
}
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private service: DriversDataService, private router: Router) { }
  driversArray = [];
  ngOnInit() {
    this.service.getAllDrivers().subscribe(data => { this.driversArray = data });
  }

  editDriver(driverId: Number) {
    this.router.navigate(['driversEdit',driverId])
  }

  deleteDriver(driverId: Number) {
    this.service.removeDriver(driverId).subscribe(response => {this.loadPage()})
  }

  loadPage() {
    this.service.getAllDrivers().subscribe(data => { this.driversArray = data });
  }

  addDriver() {
    this.router.navigate(['addDriver'])
  }


}

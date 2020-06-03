import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriversDataService } from 'src/app/Services/Data/drivers-data.service';
import { Driver } from '../drivers/drivers.component';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.scss']
})
export class DriverEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: DriversDataService) { }
  driver: Driver
  driverId: number
  ngOnInit() {
    this.driverId = this.route.snapshot.params['driverId'];
    this.driver = new Driver(this.driverId,"");
    this.service.getSpecificdriver(this.driverId).subscribe(data => {this.driver = data})
  }

  editDriver(driverId: number, driverName:String) {
    var driver = new Driver(0,"");
    this.service.editDriver(driverId,driverName,driver).subscribe(response => {console.log("Success"); this.router.navigate(['drivers'])});
  }

}

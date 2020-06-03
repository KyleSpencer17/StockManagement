import { Component, OnInit } from '@angular/core';
import { DriversDataService } from 'src/app/Services/Data/drivers-data.service';
import { Driver } from '../drivers/drivers.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {

  constructor(private service: DriversDataService, private router: Router) { }

  ngOnInit() {
  }

  addDriver(driverName: String) {
    var driver = new Driver(0,"");
    this.service.addDriver(driverName,driver).subscribe(response => {this.router.navigate(['drivers'])});
  }

}

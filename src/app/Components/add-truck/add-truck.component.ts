import { Component, OnInit } from '@angular/core';
import { TrucksDataService } from 'src/app/Services/Data/trucks-data.service';
import { Truck } from '../trucks/trucks.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.scss']
})
export class AddTruckComponent implements OnInit {
  truck: Truck
  constructor(private truckService: TrucksDataService, private router: Router) { }

  ngOnInit() {
  }

  addTruck(regNo: String, truckType: String, capacity: Number) {
    this.truck = new Truck("","",0);
    this.truckService.addTruck(regNo,truckType, capacity,this.truck).subscribe(response => {this.router.navigate(['trucks'])})
  }

}

import { Component, OnInit } from '@angular/core';
import { Truck } from '../trucks/trucks.component';
import { TrucksDataService } from 'src/app/Services/Data/trucks-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.scss']
})
export class TruckEditComponent implements OnInit {

  constructor(private truckService: TrucksDataService, private router: Router, private route: ActivatedRoute) { }
  regNo: String
  truck: Truck
  ngOnInit() {
    this.regNo = this.route.snapshot.params['regNo'];
    this.truck = new Truck(this.regNo,"",0);
    this.truckService.getTruck(this.regNo).subscribe(data => {this.truck = data})
  }
  editTruck(regNo: String, truckType: String, capacity: Number) {
    this.truck = new Truck("","",0);
    this.truckService.editTruck(regNo,truckType, capacity,this.truck).subscribe(response => {this.router.navigate(['trucks'])})
  }

}

import { Component, OnInit } from '@angular/core';
import { TrucksDataService } from 'src/app/Services/Data/trucks-data.service';
import { Router } from '@angular/router';

export class Truck {

  constructor(regNo: String, truckType: String, capacity: number) { }
}

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  constructor(private service: TrucksDataService, private router: Router) { }
  truckArray = []
  ngOnInit() {
    this.service.getAllTrucks().subscribe(data => { this.truckArray = data });
  }

  getAllTrucks() {
    this.service.getAllTrucks().subscribe(data => { this.truckArray = data });
  }

  editTruck(regNo: String) {
    this.router.navigate(['truckEdit', regNo])
  }

  addTruck(regNo: String) {
    this.router.navigate(['addTruck'])
  }

  deleteTruck(regNo: String) {
    var isGone: boolean
    this.service.deleteTruck(regNo).subscribe((response) => { this.service.getAllTrucks().subscribe(data => { this.truckArray = data });})
  }
}

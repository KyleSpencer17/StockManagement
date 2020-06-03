import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Truck } from 'src/app/Components/trucks/trucks.component';

@Injectable({
  providedIn: 'root'
})
export class TrucksDataService {

  constructor(private http: HttpClient) { }

  getAllTrucks() {
    return this.http.get<Truck[]>(`http://localhost:8080/trucks`);
  }

  getTrucksbyCapacity(capacity: Number) {
    return this.http.get<Truck[]>(`http://localhost:8080/trucks/truck/${capacity}`);
  }

  addTruck(regNo: String, truckType: String, capacity: Number,truck: Truck) {
    return this.http.post<Truck>(`http://localhost:8080/trucks/${regNo}/${truckType}/${capacity}`, truck);
  }

  editTruck(regNo: String, truckType: String, capacity: Number,truck: Truck) {
    return this.http.post<Truck>(`http://localhost:8080/trucks/${regNo}/${truckType}/${capacity}`, truck);
  }

  getTruck(regNo: String) {
    return this.http.get<Truck>(`http://localhost:8080/trucks/${regNo}`);
  }

  deleteTruck(regNo: String) {
    return this.http.delete(`http://localhost:8080/trucks/${regNo}`);
  }
}

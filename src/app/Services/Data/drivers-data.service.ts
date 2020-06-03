import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from 'src/app/Components/drivers/drivers.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DriversDataService {

  constructor(private http:HttpClient) { }

  getAllDrivers() { 
    return this.http.get<Driver[]>(`http://localhost:8080/drivers`);
  }

  getSpecificdriver(driverId: Number) {
    return this.http.get<Driver>(`http://localhost:8080/drivers/${driverId}`);
  }

  editDriver(driverId:Number,driverName: String, driver: Driver){
    return this.http.put(`http://localhost:8080/drivers/${driverId}/${driverName}`,driver)
  }

  removeDriver(driverId: Number) {
    return this.http.delete(`http://localhost:8080/drivers/driver/${driverId}`);
  }

  addDriver(driverName: String, driver: Driver) {
    return this.http.post(`http://localhost:8080/drivers/${driverName}`,driver)
  }

  
}

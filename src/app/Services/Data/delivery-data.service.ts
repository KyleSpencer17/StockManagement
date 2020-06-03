import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Delivery {
  constructor(trackingNum: number, regNo: String, orderId: number,driver1Name: String, driver2Name:String,date: Date, destination: String, completed: boolean) {}
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryDataService {

  constructor(private http: HttpClient) { }

  createDelivery(RegNo: String,orderId:number,driver1Name:String,driver2Name:String,date:Date,destination:String, delivery: Delivery) {
    return this.http.post(`http://localhost:8080/deliveries/${RegNo}/${orderId}/${driver1Name}/${driver2Name}/${date}/${destination}`,delivery);
  }

  getallDeliveries() {
    return this.http.get<Delivery[]>(`http://localhost:8080/deliveries`);
  }

  completeDeliveries(trackingNumber: Number, RegNo: String,orderId:number,driver1Name:String,driver2Name:String,date:Date,destination:String, delivery: Delivery) {
    return this.http.put(`http://localhost:8080/deliveries/${trackingNumber}/${RegNo}/${orderId}/${driver1Name}/${driver2Name}/${date}/${destination}`,delivery);
  }

  deleteDelivery(trackingNumber: Number){
    return this.http.delete(`http://localhost:8080/deliveries/${trackingNumber}`)
  }
}

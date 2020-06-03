import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/Components/Order/orders.component';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {

  
  constructor(private http: HttpClient) { }

  requestOrders() {
    return this.http.get<Order[]>(`http://localhost:8080/orders`)
  }

  deleteOrder(id: number) {
    return this.http.delete(`http://localhost:8080/orders/${id}`);
  }

  getOrder(id: number) {
    return this.http.get<Order>(`http://localhost:8080/orders/${id}`);
  }

  updateOrder(orderId: number, orderAmount: number, customerId: number, destination: String, order: Order) {
    order = new Order(orderId,orderAmount,customerId,destination);
    return this.http.put<Order>(`http://localhost:8080/orders/order/${orderId}/${orderAmount}/${customerId}/${destination}`, order);
  }

  addOrder(orderAmount: number, customerId: number, destination: String, order: Order) {
    return this.http.post(`http://localhost:8080/orders/${orderAmount}/${customerId}/${destination}`, order);
  }

  getCustOrders(customerId: Number) {
    return this.http.get<Order[]>(`http://localhost:8080/orders/customer/${customerId}`)
  }

  dispatchDelivery(orderId: number,inTruck: boolean, order: Order){
  return this.http.put<boolean>(`http://localhost:8080/orders/${orderId}/${inTruck}`, order)
  }

  getOrderStatus(orderId: Number) {
    return this.http.get<boolean>(`http://localhost:8080/orders/status/${orderId}`)
  }

  getOrderDestination(orderId: Number) {
    return this.http.get<any>(`http://localhost:8080/orders/destination/${orderId}`);
  }

  getOrderAmount(orderId: Number) {
    return this.http.get<Number>(`http://localhost:8080/orders/amount/${orderId}`)
  }
}

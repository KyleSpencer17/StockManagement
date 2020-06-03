import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customer } from '../../Components/Customer/customers.component';
import { Observable,throwError  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../error-handling.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient, private service: ErrorHandlingService) { }

  retrieveCustomers():Observable<any> {
    return this.http.get<customer[]>(`http://localhost:8080/customers`).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  getCustomerId(userName:String):Observable<any> {
    return this.http.get<number>(`http://localhost:8080/customers/id/${userName}`).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  getCustomer(id:Number):Observable<any> {
    return this.http.get<customer>(`http://localhost:8080/customers/${id}`).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  updateCustomer(customer: customer):Observable<any> {
    return this.http.put<customer>(`http://localhost:8080/customers/customer/`,customer).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  addCustomer(name: String,password: String, customer: customer):Observable<any> {
    return this.http.post(`http://localhost:8080/customers/customer/${name}/${password}`, customer).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/customers/${id}`).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  isValidLogin(customerName: String, password: String):Observable<any> {
    return this.http.get(`http://localhost:8080/customers/${customerName}/${password}`).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }

  getCustPass(username: String): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/customers/passwords/${username}`).pipe(map((data:any)=>data),catchError(this.service.handleError));
    
  }

  getUsersFromFile(stingified: String):Observable<any>{
    return this.http.post(`http://localhost:8080/customers/addMultiple`,stingified).pipe(map((data:any)=>data),catchError(this.service.handleError));
  }
  
}

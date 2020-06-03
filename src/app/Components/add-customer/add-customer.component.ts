import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';
import { customer, CustomersComponent } from '../Customer/customers.component';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer2: customer
  customerName: String
  password: String
  constructor(private customerService: CustomerDataService, private router: Router) { }

  ngOnInit() {
  }

  newCustomer(customerName: String, customer2, password: String) {
    customer2 = new customer(0, customerName, password);
    this.customerService.addCustomer(customerName, password, customer2).subscribe(response => { });
    this.router.navigate(['customers']);
  }
}

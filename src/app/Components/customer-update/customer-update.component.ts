import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../Customer/customers.component';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerDataService) { }
  name
  idNum
  id: number;
  customer1: customer;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customer1 = new customer(this.id, '', '');
    this.customerService.getCustomer(this.id).subscribe(data => { this.customer1 = data })
  }

  updateCustomer(id: number, name: String, password: String) {
    var c1 = new customer(id,name,"password");
    console.log(c1)
    this.customerService.updateCustomer(c1).subscribe(data => {alert("Status: " + data)})
  }

}

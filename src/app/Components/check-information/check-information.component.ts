import { Component, OnInit, ɵConsole } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';
import { customer } from '../Customer/customers.component';
import { error } from 'protractor';

export class DefaultResponseReader {
  public data: any;
}
@Component({
  selector: 'app-check-information',
  templateUrl: './check-information.component.html',
  styleUrls: ['./check-information.component.scss']
})
export class CheckInformationComponent implements OnInit {
name: String
password: String
  customer: customer;
  constructor(private authen: AuthenticationService, private custService: CustomerDataService) { }

  ngOnInit() {
    this.getCustomerInfo()
    customer: customer
  }
   getCustomerInfo() {
    let resp: String
    this.name = sessionStorage.getItem('username');
    this.custService.getCustPass(this.name).subscribe((data:String) => {this.password = data["data"]});
  }

  async getCustId() {
    var name: String = sessionStorage.getItem('username');
    var custId
    this.custService.getCustomerId(name).subscribe(data => {custId = data});
    await this.sleep(100)
    console.log(custId)
    return custId
  }

  async updateCust(name: string, password:String) {
    this.customer = new customer(0,"","")
    var id: Number = await this.getCustId()
    console.log("updateCustId: " + id)
    console.log("Password: " + password)
    console.log(id, name, password)
    this.custService.updateCustomer(this.customer ).subscribe(data => {this.customer = data})
    sessionStorage.setItem('username',name)
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

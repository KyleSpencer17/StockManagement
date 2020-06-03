import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { CustomerDataService } from 'src/app/Services/Data/customer-data.service';
import { AdminDataService } from 'src/app/Services/Data/admin-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
    private custService: CustomerDataService, private service: AuthenticationService, private adminService: AdminDataService) { }

  validLogin: boolean
  
  ngOnInit() {
  }

  async Login(name: String, password: String) {
    var loginbool: boolean
    this.custService.isValidLogin(name, password).subscribe((data: boolean) => { this.validLogin = data})
    await this.sleep(50)
    if (this.validLogin == false) {
      this.adminService.checkAdmin(name, password).subscribe((data: boolean) => { loginbool = data})
      await this.sleep(50)
      if (loginbool == false) {
        alert("Invalid Login")
        var admin = "false"
      }
      else {
        this.service.isAdmin()
        var admin = "true"
        this.validLogin = true;
      }
    }

    var userName = name.valueOf();
    if (this.validLogin == true) {
      this.service.authenticate(userName, this.validLogin, admin);
      this.router.navigate(['adminOrder'])
    }
    else {
      alert("Invalid Login");
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  addCustomer() {
    this.router.navigate(['addCustomer'])
  }
}



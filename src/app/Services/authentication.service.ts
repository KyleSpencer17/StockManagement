import { Injectable } from '@angular/core';
import { CustomerDataService } from './Data/customer-data.service';
import { AdminDataService } from './Data/admin-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private custService: CustomerDataService, private adminService: AdminDataService, private router: Router) { }

  isAdminastrator = false
  adminCheck: boolean;

  authenticate(username: string, valid: boolean, admin: string) {
    if (valid == true) {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('Admin', admin)
      return true;
    } else {
      alert("Invalid Login")
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  checkAdmin(name: String, password: String) {

  }

  isAdmin() {
    let isAdmin = sessionStorage.getItem('Admin')
    if (isAdmin === "true") {
      return true
    }
    else {
      return false;
    }
  }
  
}


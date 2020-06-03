import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  logout() {
    this.service.logOut();
  }

  isUserLoggedIn() {
    this.service.isUserLoggedIn();
  }

}

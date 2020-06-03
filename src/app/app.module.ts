import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Components/Customer/customers.component';
import { OrdersComponent} from './Components/Order/orders.component'
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginComponent } from './Components/login/login.component';
import { DriversComponent } from './Components/drivers/drivers.component';
import {RouteComponent} from './Components/route/route.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { LogoutComponent } from './Components/logout/logout.component';
import {TrucksComponent} from "./Components/trucks/trucks.component";
import { CustomerUpdateComponent } from './Components/customer-update/customer-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { AdminOrderComponent } from './Components/admin-order/admin-order.component';


import { OrderEditComponent } from './Components/order-edit/order-edit.component';
import { DriverEditComponent } from './Components/driver-edit/driver-edit.component';
import { AddTruckComponent } from './Components/add-truck/add-truck.component';
import { FooterComponent } from './Components/footer/footer.component';

import { ViewDeliveryComponent } from './Components/view-delivery/view-delivery.component';

import { TruckEditComponent } from './Components/truck-edit/truck-edit.component';
import { CheckInformationComponent } from './Components/check-information/check-information.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { CustomerDeliveriesComponent } from './Components/customer-deliveries/customer-deliveries.component';
import { AddDriverComponent } from './Components/add-driver/add-driver.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatNativeDateModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';







@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    MenuComponent,
    LoginComponent,
    DriversComponent,
    RouteComponent,
    DeliveryComponent,
    LogoutComponent,
    TrucksComponent,
    CustomerUpdateComponent,
    AddCustomerComponent,
    AdminOrderComponent,
    OrderEditComponent,
    DriverEditComponent,
    AddTruckComponent,
    FooterComponent,  
    ViewDeliveryComponent,
    TruckEditComponent,
    CheckInformationComponent,
    MyOrdersComponent,
    CustomerDeliveriesComponent,
    AddDriverComponent,
    TestComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
  
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

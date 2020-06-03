import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './Components/Order/orders.component';
import { CustomersComponent } from './Components/Customer/customers.component';
import { RouteComponent } from './Components/route/route.component';
import { DriversComponent } from './Components/drivers/drivers.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { TrucksComponent } from './Components/trucks/trucks.component';
import { CustomerUpdateComponent } from './Components/customer-update/customer-update.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { AdminOrderComponent } from './Components/admin-order/admin-order.component';
import { OrderEditComponent } from './Components/order-edit/order-edit.component';
import { AddTruckComponent } from './Components/add-truck/add-truck.component';
import { ViewDeliveryComponent } from './Components/view-delivery/view-delivery.component';
import { RouteGuardService } from './Services/route-guard.service';
import { TruckEditComponent } from './Components/truck-edit/truck-edit.component';
import { CheckInformationComponent } from './Components/check-information/check-information.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { CustomerDeliveriesComponent } from './Components/customer-deliveries/customer-deliveries.component';
import { DriverEditComponent } from './Components/driver-edit/driver-edit.component';
import { AddDriverComponent } from './Components/add-driver/add-driver.component';
import { TestComponent } from './test/test.component';







const routes: Routes = [
{path: 'orders', component: OrdersComponent, canActivate: [RouteGuardService]},
{path: 'customers', component: CustomersComponent, canActivate: [RouteGuardService]},
{path: 'routes', component: RouteComponent, canActivate: [RouteGuardService]},
{path: 'drivers', component: DriversComponent, canActivate: [RouteGuardService]},
{path: 'deliveries', component: DeliveryComponent, canActivate: [RouteGuardService]},
{path: 'trucks', component: TrucksComponent, canActivate: [RouteGuardService]},
{path: '', component: LoginComponent},
{path: 'test', component: TestComponent},
{path: 'updateCustomer/:id', component: CustomerUpdateComponent, canActivate: [RouteGuardService]},
{path: 'addCustomer', component: AddCustomerComponent},
{path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
{path: 'adminOrder', component: AdminOrderComponent, canActivate: [RouteGuardService]},
{path: 'editOrder/:id', component: OrderEditComponent, canActivate: [RouteGuardService]},
{path: 'addTruck', component: AddTruckComponent, canActivate: [RouteGuardService]},

{path: 'viewDelivery', component: ViewDeliveryComponent, canActivate: [RouteGuardService]},
{path: 'truckEdit/:regNo', component: TruckEditComponent, canActivate: [RouteGuardService]},
{path: 'driversEdit/:driverId', component: DriverEditComponent, canActivate: [RouteGuardService]},
{path: 'addDriver', component: AddDriverComponent, canActivate: [RouteGuardService]},
{path: 'checkInfo', component: CheckInformationComponent, canActivate: [RouteGuardService]},
{path: 'myOrders', component: MyOrdersComponent, canActivate: [RouteGuardService]},
{path: 'myDeliveries', component: CustomerDeliveriesComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

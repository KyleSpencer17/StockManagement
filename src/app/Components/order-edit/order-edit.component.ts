import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../Order/orders.component';
import { OrderDataService } from '../../Services/Data/order-data.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: OrderDataService, private router: Router) { }
  id: number
  order: Order
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.order = new Order(this.id,0,0,'');
    this.service.getOrder(this.id).subscribe(data => {this.order = data})
  }

  getOrder(id: number) {
    this.service.getOrder(id).subscribe(data => this.order = data)
  }

  updateOrder(id:number, amount: number,custId: number,destination: String) {
    var order: Order
    this.service.updateOrder(id,amount,custId, destination,order).subscribe(  response => this.router.navigate(['orders'])
    )
  }
}

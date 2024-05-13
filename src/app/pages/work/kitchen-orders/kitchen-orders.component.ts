import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.scss']
})
export class KitchenOrdersComponent implements OnInit {

  orderList: any[] = [];

  ngOnInit(): void {
    this.orderList = [
      this.createFakeOrder(),
      this.createFakeOrder(),
      this.createFakeOrder(),
      this.createFakeOrder(),
    ]


  }

  private createFakeOrder(): any {
    return {
      clientName: "João",
      orderId: 1,
      items: {
        sandwichs: [
          {}
        ],
        portion: [{}],
        drinks: [{}]
      }
    }
  }
}

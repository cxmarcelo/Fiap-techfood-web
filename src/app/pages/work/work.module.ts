import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { KitchenOrdersComponent } from './kitchen-orders/kitchen-orders.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { MainComponent } from './structure/main/main.component';
import { FooterComponent } from './structure/footer/footer.component';


@NgModule({
  declarations: [
    KitchenOrdersComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }

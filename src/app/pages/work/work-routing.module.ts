import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './structure/main/main.component';
import { KitchenOrdersComponent } from './kitchen-orders/kitchen-orders.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'orders', component: KitchenOrdersComponent },
      //{ path: 'kitchen', loadChildren: () => import('./pages/kitchen/kitchen.module').then((m) => m.KitchenModule), },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }

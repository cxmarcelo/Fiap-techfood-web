import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { MainComponent } from './structure/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: ClientHomePageComponent },
    ]
  },

  { path: '**', redirectTo: '' },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

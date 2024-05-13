import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { MainComponent } from './structure/main/main.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ClientLoginStepComponent } from './client-home-page/steps/client-login-step/client-login-step.component';
import { HomeStepComponent } from './client-home-page/steps/home-step/home-step.component';
import { ProductSelectStepComponent } from './client-home-page/steps/product-select-step/product-select-step.component';


@NgModule({
  declarations: [
    ClientHomePageComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ClientLoginStepComponent,
    HomeStepComponent,
    ProductSelectStepComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

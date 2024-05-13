import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderStepEnum } from 'src/app/models/enums/order-step';

@Component({
  selector: 'app-client-home-page',
  templateUrl: './client-home-page.component.html',
  styleUrls: ['./client-home-page.component.scss']
})
export class ClientHomePageComponent implements OnInit {



  CURRENT_STEP: number = 1;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      

    });
  }


  //checa se existe touchscreen
  isTouchDevice() {
    let isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    console.log("isTouch?: " + isTouch);
    return isTouch;
  }


  public changeStep(orderStepEnum: OrderStepEnum) {
    this.CURRENT_STEP = orderStepEnum;
  }

}

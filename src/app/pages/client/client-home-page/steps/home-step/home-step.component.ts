import { Component, EventEmitter, Output } from '@angular/core';
import { OrderStepEnum } from 'src/app/models/enums/order-step';

@Component({
  selector: 'app-home-step',
  templateUrl: './home-step.component.html',
  styleUrls: ['./home-step.component.scss']
})
export class HomeStepComponent {

  @Output() stepChangeEvent = new EventEmitter<number>();


  public btnToLoginPage() {
    this.stepChangeEvent.emit(OrderStepEnum.LOGIN_STEP);
  }

}

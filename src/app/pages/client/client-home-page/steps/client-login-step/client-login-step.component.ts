import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderStepEnum } from 'src/app/models/enums/order-step';

@Component({
  selector: 'app-client-login-step',
  templateUrl: './client-login-step.component.html',
  styleUrls: ['./client-login-step.component.scss']
})
export class ClientLoginStepComponent implements OnInit {


  @Input() formGroup!: FormGroup;
  @Output() stepChangeEvent = new EventEmitter<number>();


  constructor() {

  }

  ngOnInit(): void {
    if (this.formGroup == null) {
      throw new Error('Form Group null.');
    }
  }


  public btnDoLogin() {

  }


  public btnEnterAnonymous() {
    console.log("Entrei no anoni")
    this.formGroup.patchValue({
      isAnonymous: true,
      clientId: null,
      clientName: null,
    })

    this.stepChangeEvent.emit(OrderStepEnum.PRODUCTS_SELECT_STEP);
  }

}

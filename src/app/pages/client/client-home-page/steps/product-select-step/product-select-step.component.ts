import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-select-step',
  templateUrl: './product-select-step.component.html',
  styleUrls: ['./product-select-step.component.scss']
})
export class ProductSelectStepComponent {

  @Output() stepChangeEvent = new EventEmitter<number>();

}

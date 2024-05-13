import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectStepComponent } from './product-select-step.component';

describe('ProductSelectStepComponent', () => {
  let component: ProductSelectStepComponent;
  let fixture: ComponentFixture<ProductSelectStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSelectStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

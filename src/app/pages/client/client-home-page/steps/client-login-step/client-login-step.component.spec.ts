import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginStepComponent } from './client-login-step.component';

describe('ClientLoginStepComponent', () => {
  let component: ClientLoginStepComponent;
  let fixture: ComponentFixture<ClientLoginStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLoginStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLoginStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

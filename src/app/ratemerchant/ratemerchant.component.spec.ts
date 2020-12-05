import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatemerchantComponent } from './ratemerchant.component';

describe('RatemerchantComponent', () => {
  let component: RatemerchantComponent;
  let fixture: ComponentFixture<RatemerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatemerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatemerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

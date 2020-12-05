import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinvestmentComponent } from './viewinvestment.component';

describe('ViewinvestmentComponent', () => {
  let component: ViewinvestmentComponent;
  let fixture: ComponentFixture<ViewinvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

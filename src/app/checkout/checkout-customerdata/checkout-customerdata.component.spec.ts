import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCustomerdataComponent } from './checkout-customerdata.component';

describe('CheckoutCustomerdataComponent', () => {
  let component: CheckoutCustomerdataComponent;
  let fixture: ComponentFixture<CheckoutCustomerdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCustomerdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCustomerdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

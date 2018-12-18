import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutThxComponent } from './checkout-thx.component';

describe('CheckoutThxComponent', () => {
  let component: CheckoutThxComponent;
  let fixture: ComponentFixture<CheckoutThxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutThxComponent
      ],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutThxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CheckoutThxComponent', () => {
    expect(component).toBeTruthy();
  });


});

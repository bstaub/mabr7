import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { AuthService } from '../../user/shared/auth.service';
import { SharedModule } from '../../shared/shared.module';

import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutCustomerdataComponent } from './checkout-customerdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../order/shared/order.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('CheckoutCustomerdataComponent', () => {
  let component: CheckoutCustomerdataComponent;
  let fixture: ComponentFixture<CheckoutCustomerdataComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutCustomerdataComponent
      ],
      imports: [SharedModule, RouterTestingModule, ReactiveFormsModule, FormsModule],
      providers: [AuthService, OrderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCustomerdataComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  function fillTheForm(firstname_b, lastname_b, address_b, zip_b, city_b, country_b, mail_b) {
    component.CustomerAddressForm.controls['customerBillingAddress'].get('firstname_b').setValue(firstname_b);
    component.CustomerAddressForm.controls['customerBillingAddress'].get('lastname_b').setValue(lastname_b);
    component.CustomerAddressForm.controls['customerBillingAddress'].get('address_b').setValue(address_b);
    component.CustomerAddressForm.controls['customerBillingAddress'].get('zip_b').setValue(zip_b);
    component.CustomerAddressForm.controls['customerBillingAddress'].get('city_b').setValue(city_b);
    component.CustomerAddressForm.controls['customerBillingAddress'].get('country_b').setValue(country_b);
    component.CustomerAddressForm.controls['customerBillingAddress'].get('mail_b').setValue(mail_b);
  }

  it('should create CheckoutCustomerdataComponent', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.CustomerAddressForm.valid).toBeFalsy();
  });

  it('email field should be invalid if it doesnt match the pattern', () => {
    let errors = {};
    console.log(component);
    // const email = component.CustomerAddressForm.controls['customerBillingAddress'].controls['mail_b'];
    const email = component.CustomerAddressForm.controls['customerBillingAddress'].get('mail_b');
    email.setValue('test');
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();
  });


  it('button for next step should be inactive while form is not valid', () => {
    const button = de.query(By.css('button[type=\'submit\']'));
    expect(button.properties['disabled']).toBeTruthy();
  });


  it('property formIsValid  should be true when required fields are filled in',
    fakeAsync(() => {
      fillTheForm(
        'Hans', 'Muster', 'Musterweg 7', '6005', 'Luzern', 'Schweiz', 'max.muster@gmail.com'
      );
      fixture.detectChanges();
      expect(component.formIsValid).toBeTruthy();

    })
  );

  it('button for next step shoud be active when form is valid', () => {
    const button = de.query(By.css('button[type=\'submit\']'));
    component.formIsValid = true;
    fixture.detectChanges();
    expect(button.properties['disabled']).toBeFalsy();
  });


});

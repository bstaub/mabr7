import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrderflyoutComponent } from './header-orderflyout.component';

describe('HeaderOrderflyoutComponent', () => {
  let component: HeaderOrderflyoutComponent;
  let fixture: ComponentFixture<HeaderOrderflyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOrderflyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOrderflyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

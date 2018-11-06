import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFlyoutComponent } from './header-flyout.component';

describe('HeaderFlyoutComponent', () => {
  let component: HeaderFlyoutComponent;
  let fixture: ComponentFixture<HeaderFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

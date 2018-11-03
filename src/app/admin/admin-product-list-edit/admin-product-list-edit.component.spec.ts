import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductListEditComponent } from './admin-product-list-edit.component';

describe('AdminProductListEditComponent', () => {
  let component: AdminProductListEditComponent;
  let fixture: ComponentFixture<AdminProductListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

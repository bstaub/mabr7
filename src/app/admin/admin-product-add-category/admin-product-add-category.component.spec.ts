import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductAddCategoryComponent } from './admin-product-add-category.component';

describe('AdminProductAddCategoryComponent', () => {
  let component: AdminProductAddCategoryComponent;
  let fixture: ComponentFixture<AdminProductAddCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductAddCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductAddCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

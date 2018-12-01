import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyfeatureListComponent } from './lazyfeature-list.component';

describe('LazyfeatureListComponent', () => {
  let component: LazyfeatureListComponent;
  let fixture: ComponentFixture<LazyfeatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyfeatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyfeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

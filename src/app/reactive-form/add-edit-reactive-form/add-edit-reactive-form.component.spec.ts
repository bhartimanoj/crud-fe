import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditReactiveFormComponent } from './add-edit-reactive-form.component';

describe('AddEditReactiveFormComponent', () => {
  let component: AddEditReactiveFormComponent;
  let fixture: ComponentFixture<AddEditReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

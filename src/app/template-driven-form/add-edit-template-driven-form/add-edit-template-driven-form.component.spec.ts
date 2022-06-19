import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTemplateDrivenFormComponent } from './add-edit-template-driven-form.component';

describe('AddEditTemplateDrivenFormComponent', () => {
  let component: AddEditTemplateDrivenFormComponent;
  let fixture: ComponentFixture<AddEditTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemplateDrivenFormComponent } from './list-template-driven-form.component';

describe('ListTemplateDrivenFormComponent', () => {
  let component: ListTemplateDrivenFormComponent;
  let fixture: ComponentFixture<ListTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

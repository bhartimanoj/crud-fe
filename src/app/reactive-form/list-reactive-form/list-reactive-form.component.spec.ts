import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReactiveFormComponent } from './list-reactive-form.component';

describe('ListReactiveFormComponent', () => {
  let component: ListReactiveFormComponent;
  let fixture: ComponentFixture<ListReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormRouting } from './reactive-form-routing.module';

import { AddEditReactiveFormComponent } from './add-edit-reactive-form/add-edit-reactive-form.component';
import { ListReactiveFormComponent } from './list-reactive-form/list-reactive-form.component';

@NgModule({
  declarations: [
    AddEditReactiveFormComponent,
    ListReactiveFormComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    ReactiveFormRouting
  ],
})

export class ReactiveFormModule { }

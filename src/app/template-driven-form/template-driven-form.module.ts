import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateDriveFormRouting } from './template-driven-form-routing.module';

import { AddEditTemplateDrivenFormComponent } from './add-edit-template-driven-form/add-edit-template-driven-form.component';
import { ListTemplateDrivenFormComponent } from './list-template-driven-form/list-template-driven-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    AddEditTemplateDrivenFormComponent,
    ListTemplateDrivenFormComponent],
  imports: [
    CommonModule,

    FormsModule,

    TemplateDriveFormRouting
  ],
})

export class TemplateDrivenFormModule { }

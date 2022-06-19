import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditTemplateDrivenFormComponent } from './add-edit-template-driven-form/add-edit-template-driven-form.component';
import { ListTemplateDrivenFormComponent } from './list-template-driven-form/list-template-driven-form.component';

const routes: Routes = [
    {path:'', redirectTo:'list', pathMatch:'full'},
{path:'list', component: ListTemplateDrivenFormComponent},
{path:'add', component: AddEditTemplateDrivenFormComponent},
{path:'edit/:id', component: AddEditTemplateDrivenFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TemplateDriveFormRouting { }

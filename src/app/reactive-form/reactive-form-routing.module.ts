import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditReactiveFormComponent } from './add-edit-reactive-form/add-edit-reactive-form.component';
import { ListReactiveFormComponent } from './list-reactive-form/list-reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListReactiveFormComponent },
  { path: 'add', component: AddEditReactiveFormComponent },
  { path: 'edit/:id', component: AddEditReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReactiveFormRouting { }

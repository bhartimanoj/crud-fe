import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'reactive-form', pathMatch: 'full' },
  { path: 'reactive-form', loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
  { path: 'template-driven-form', loadChildren: () => import('./template-driven-form/template-driven-form.module').then(m => m.TemplateDrivenFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

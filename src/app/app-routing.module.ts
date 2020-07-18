import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [{ path: 'test', component: TestFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

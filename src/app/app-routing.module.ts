import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './tasks/form/form.component';
import { ListComponent } from './tasks/list/list.component';

const routes: Routes = [  
  {
    path: 'list',
    component: ListComponent,    
  },
  {
    path: 'form/:id',
    component: FormComponent
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

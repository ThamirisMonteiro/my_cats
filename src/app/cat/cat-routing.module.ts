import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';


const routes: Routes = [
  {
    path: '',
    component: CatComponent,
    children: [
      {
        path:'',
        pathMatch: 'full',
        component: CatListComponent
      },
      {
        path: 'add',
        component: CatFormComponent
      },
      {
        path: 'edit/:id',
        component: CatFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatRoutingModule { }

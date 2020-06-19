import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatRoutingModule} from './cat-routing.module';
import {CatComponent} from './cat.component';
import {CatListComponent} from './cat-list/cat-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import {FormsModule} from '@angular/forms';
import { CatRowComponent } from './cat-list/cat-row/cat-row.component';


@NgModule({
  declarations: [CatComponent, CatListComponent, CatFormComponent, CatRowComponent],
  imports: [
    CommonModule,
    CatRoutingModule,
    FormsModule
  ]
})
export class CatModule { }

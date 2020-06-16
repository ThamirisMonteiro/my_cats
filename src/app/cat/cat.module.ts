import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatRoutingModule } from './cat-routing.module';
import { CatComponent } from './cat.component';


@NgModule({
  declarations: [CatComponent],
  imports: [
    CommonModule,
    CatRoutingModule
  ]
})
export class CatModule { }

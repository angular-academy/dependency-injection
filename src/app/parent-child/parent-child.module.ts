import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentModule } from './parent/parent.module';
import { ChildModule } from './child/child.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentModule,
    ChildModule
  ],
  exports: [
    ParentModule,
    ChildModule
  ]
})
export class ParentChildModule { }

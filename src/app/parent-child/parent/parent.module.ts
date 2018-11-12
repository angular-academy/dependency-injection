import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [ParentComponent],
  exports: [ParentComponent],
  imports: [
    CommonModule
  ]
})
export class ParentModule { }

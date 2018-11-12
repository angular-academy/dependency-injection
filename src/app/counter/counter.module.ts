import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // das Feature-Module stellt einen Service bereit
    CounterService
  ]
})
export class CounterModule { }

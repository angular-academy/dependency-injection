import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterPanelComponent } from './counter-panel.component';

@NgModule({
  declarations: [CounterPanelComponent],
  exports: [CounterPanelComponent],
  imports: [
    CommonModule
  ]
})
export class CounterPanelModule { }

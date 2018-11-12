import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Component({
  selector: 'app-counter-panel',
  templateUrl: './counter-panel.component.html',
  styleUrls: ['./counter-panel.component.scss']
})
export class CounterPanelComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

  public decrementCounter($event: Event): void {
    $event.preventDefault();
    this.counterService.decrement();
  }

  public incrementCounter($event: Event): void {
    $event.preventDefault();
    this.counterService.increment();
  }
}

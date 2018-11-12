import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.scss'],
  // wir deklarieren einen Service in den viewProviders damit
  // er lokal im Template zur Verfügung steht,
  // und bei content-transclusion keine Probleme bereitet
  viewProviders: [CounterService],

  // wir providen einen Service, wenn wir für die Komponente, ihre Kinder
  // und content-children eine neue Instanz wollen.
  providers: [CounterService]
})
export class CounterContainerComponent implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

}

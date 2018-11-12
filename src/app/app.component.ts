import { Component, Inject } from '@angular/core';
import { CounterService } from './counter/counter.service';
import { CONFIG, Config } from './config/config';
import { Icon, ICON } from './icon/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di';

  constructor(public counterService: CounterService,
    @Inject(CONFIG) public config: Config,
    @Inject(ICON) public icons: Icon[]) {
    console.log('app counter instance', this.counterService.instanceId);
  }
}

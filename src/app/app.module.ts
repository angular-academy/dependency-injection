import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { CounterPanelModule } from './counter-panel/counter-panel.module';
import { CounterContainerModule } from './counter-container/counter-container.module';
import { CONFIG, Config } from './config/config';
import { ICON, Icon } from './icon/icon';
import { ParentChildModule } from './parent-child/parent-child.module';
// import { CounterService } from './counter/counter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    CounterPanelModule,
    CounterContainerModule,
    ParentChildModule
  ],
  providers: [
    // hier providen wir den Service im App-Module
    // CounterService
    {
      provide: CONFIG,
      useValue: <Config>{
        language: 'de',
        trackerUrl: 'localhost://piwik.php',
        trackerKey: 'app-di'
      }
    },
    {
      provide: ICON,
      useValue: <Icon>{
        name: 'checked',
        file: 'assets/images/check.svg'
      },
      multi: true
    },
    {
      provide: ICON,
      useValue: <Icon>{
        name: 'bomb',
        file: 'assets/images/bomb.svg'
      },
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

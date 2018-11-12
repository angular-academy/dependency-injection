import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPanelComponent } from './counter-panel.component';

describe('CounterPanelComponent', () => {
  let component: CounterPanelComponent;
  let fixture: ComponentFixture<CounterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

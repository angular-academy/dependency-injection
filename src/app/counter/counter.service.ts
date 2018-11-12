import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(/* {
  // so wird der Service im root-Module instanziiert
  providedIn: 'root'
}*/)
export class CounterService extends Subject<number> {

  private static instanceCounter = 0;

  public value: number;

  public get instanceId(): number {
    return this._instanceId;
  }

  private _instanceId: number;

  constructor() {
    super();
    CounterService.instanceCounter++;
    this._instanceId = CounterService.instanceCounter;
    this.value = 0;
  }

  public increment(): void {
    this.value++;
    this.next(this.value);
  }

  public decrement(): void {
    this.value--;
    this.next(this.value);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public numChildren: number;
  constructor() {
    this.numChildren = 0;
  }

  ngOnInit() {
  }

  public registerChild(): void {
    this.numChildren++;
  }

  public unregisterChild(): void {
    this.numChildren--;
  }
}

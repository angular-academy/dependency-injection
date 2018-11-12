import { Component, OnInit, OnDestroy } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  constructor(private parent: ParentComponent) { }

  ngOnInit() {
    this.parent.registerChild();
  }

  ngOnDestroy() {
    this.parent.unregisterChild();
  }

}

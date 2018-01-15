import { Component } from '@angular/core';
import * as _ from 'lodash';

// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fabio application';
  rootName = 'Fabio';
  rootItems = ['Apple', 'Banana', 'Cherry'];

  onItemWasAdded(event) {
    this.rootItems.push(event);
    console.log(this.rootItems);
  }

}

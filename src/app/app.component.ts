import { Component } from '@angular/core';
import 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fabio application';
  rootName = 'Fabio';
  number = 1;

  onIncrease() {
    // this.number *= 2;
    this.number = _.random(1, 10);
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }

}

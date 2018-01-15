import { Component } from '@angular/core';

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
    this.number *= 2;
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }

}

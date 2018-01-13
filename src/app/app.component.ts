import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fabio application';
  rootName = 'Fabio';

  onNameChanged(newName) {
    this.rootName = newName;
  }

}

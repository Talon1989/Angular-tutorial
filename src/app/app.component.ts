import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title';
  rootName = 'Fabio';

  rootItems = ['Apples', 'Bananas', 'Cherries'];
  onItemWasAdded(newItem) {
    console.log('new item from app-component : '+newItem);
    console.log(this.rootItems);
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onNameChanged(newName) {
    this.rootName = newName;
  }

}

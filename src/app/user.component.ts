import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
      <!--value="{{name}}" == [value]="name"-->
      <input (input)="onUserInput($event)" [value]="name"/>
      <!--<input type="text" [(ngModel)]="name">-->
      <p>Hello {{name}} !</p>
      <p>I'm the user component</p>
    `
})
export class UserComponent {
  @Input() name;  // @Input() turns it into a settable
  @Output() nameChanged = new EventEmitter<string>();
  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }

}

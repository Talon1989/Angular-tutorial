import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() items = [];
  newItem = '';
  @Output() itemAdded = new EventEmitter<string>();

  addTheItem() {
    console.log(this.newItem);
    this.itemAdded.emit(this.newItem);
  }

  constructor() {
    // this.items = ['Apples', 'Bananas', 'Cherries'];
  }

  ngOnInit() {
  }

}

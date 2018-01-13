import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserComponent} from './user.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
      AppComponent,
      UserComponent,
      CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

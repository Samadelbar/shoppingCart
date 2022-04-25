import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

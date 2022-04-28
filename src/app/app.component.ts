import { Component, OnInit } from '@angular/core';
import { ShoppingCartItemModel } from './shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';
  items: ShoppingCartItemModel[] = [];

  totalPrice: number = 0;

  onDeleteEvent($cartItemId: number) {
    const index = this.items.findIndex((item) => item.id === $cartItemId);
    this.items.splice(index, 1);
  }

  onCountUpdatedEvent($event: ShoppingCartItemModel) {
    const index = this.items.findIndex((item) => item.id === $event.id);
    this.items[index] = $event;
  }
  refresh() {
    let sumPrice: number = 0;
    this.items.forEach((item) => {
      const price: number = item.price ?? 0;
      sumPrice += (price * (item.count ?? 0));
    });
    this.totalPrice = sumPrice;
  }

  ngOnInit(): void {
    this.initCart();
  }
  private initCart() {
    this.items = [
      {
        id: 1,
        count: 1,
        image: 'assets/images/adam-niescioruk-ltn8ztC6kjk-unsplash.jpg',
        name: 'orange',
        price: 5,
      },
      {
        id: 2,
        count: 8,
        image: 'assets/images/istockphoto-1157946861-1024x1024.jpg',
        name: 'Strawberry',
        price: 7,
      },
      {
        id: 3,
        count: 3,
        image: 'assets/images/istockphoto-1291262112-1024x1024.jpg',
        name: 'banana',
        price: 4,
      },
      {
        id: 4,
        count: 4,
        image: 'assets/images/amit-lahav-rxN2MRdFJVg-unsplash.jpg',
        name: 'Apple',
        price: 6,
      },
    ];
    this.refresh();
  }
}

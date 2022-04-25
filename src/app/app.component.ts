import { Component } from '@angular/core';
import { ShoppingCartItemModel } from './shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';
  items: ShoppingCartItemModel[]=[
    {id: 1, count: 1, image:'assets/images/adam-niescioruk-ltn8ztC6kjk-unsplash.jpg', name:'orange', price: 5},
    {id: 2, count: 8, image:'assets/images/istockphoto-1157946861-1024x1024.jpg', name:'Strawberry', price: 7},
    {id: 3, count: 3, image:'assets/images/istockphoto-1291262112-1024x1024.jpg', name:'banana', price: 4},
    {id: 4, count: 4, image:'assets/images/amit-lahav-rxN2MRdFJVg-unsplash.jpg', name:'Apple', price: 6}
  ];

  onDeleteEvent($event: number){

  }
}

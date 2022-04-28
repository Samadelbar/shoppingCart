import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartItemModel } from '../shared/models/shopping-cart-item.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

@Input() item?: ShoppingCartItemModel;
@Output() OnDelete = new EventEmitter<number>();
@Output() OnCountUpdated = new EventEmitter<ShoppingCartItemModel>();
@Output() OnRefresh = new EventEmitter();


constructor() { }

  ngOnInit(): void {
  }

  add(){
    const currentCount: number = this.item?.count ?? 0;
    if(this.item != null){
    this.item.count = currentCount +1;
    }
    this.OnCountUpdated.emit(this.item);
    this.OnRefresh.emit();
  }
  sub(){
    const currentCount: number = this.item?.count ?? 0;
    if(this.item != null){
    this.item.count = currentCount > 0 ? (currentCount -1): 0;
    }
    this.OnCountUpdated.emit(this.item);
    this.OnRefresh.emit();
  }
  del(itemId?: number){
    this.OnDelete.emit(itemId)
    this.OnCountUpdated.emit(this.item);
    this.OnRefresh.emit();

  }
}

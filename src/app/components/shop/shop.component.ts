import { Component, OnInit } from '@angular/core';
import { OnSale } from 'src/app/models/onsale-model';
import { ShopItem } from 'src/app/models/item-model';
import { BasketComponent } from '../basket/basket.component';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  itemsOnSale = new OnSale();
  basket = [];
  basketTotal = 0;

  constructor() { }

  ngOnInit() {
  }

  addToBasket(item: ShopItem) {
    this.basket.push(item);
    this.basketTotal += parseFloat(item.price.toPrecision(2));
    console.log(this.basketTotal);
  }

  deleteFromBasket(item: ShopItem) {
    this.basket.splice(this.basket.indexOf(item), 1);
    this.basketTotal -= parseFloat(item.price.toPrecision(2));
    console.log(this.basketTotal);
  }
}

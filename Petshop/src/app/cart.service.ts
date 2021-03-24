import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  petitems = [];
  constructor() { }

  // tslint:disable-next-line: no-shadowed-variable typedef
  addToCart(pets) {
    this.petitems.push(pets);
  }

  // tslint:disable-next-line: typedef
  getItems() {
    return this.petitems;
  }

  // tslint:disable-next-line: typedef
  clearCart() {
    this.petitems = [];
    return this.petitems;
  }
}

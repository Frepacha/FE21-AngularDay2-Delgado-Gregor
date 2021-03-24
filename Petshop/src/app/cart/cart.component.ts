import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
// tslint:disable-next-line: max-line-length
/* We added the items in the ngOnInit() function, because it will be loaded every time we enter the component or we go to the cart component. */
export class CartComponent implements OnInit {
petitems;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.petitems =  this.cartService.getItems();
  }

}

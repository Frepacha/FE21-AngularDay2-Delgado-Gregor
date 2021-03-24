import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      adress: '',
      zipcode: ''
    });
  }

  ngOnInit(): void {
    this.petitems =  this.cartService.getItems();
  }

  // tslint:disable-next-line: typedef
  onSubmit(customerData) {

    // Process checkout data here
    console.warn('Your Pet has been submitted', customerData);
    this.petitems = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}

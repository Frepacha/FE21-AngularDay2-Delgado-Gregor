import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { ActivatedRoute } from '@angular/router'; /* package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods */
import { pets } from '../petProducts';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
pets: any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  // tslint:disable-next-line: no-shadowed-variable typedef
  addToCart(pets) {
    window.alert('Your Pet has been addded to the cart');
    this.cartService.addToCart(pets);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
this.pets = pets[+params.get('petId')];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods
import { products } from '../products';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')];
    });
  }
}

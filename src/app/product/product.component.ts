import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./styles/product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  getBasket() {
    this.router.navigate(['/bestellung']);
  }

}

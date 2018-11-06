import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<any[]>;

  ngOnInit() {
    this.products$ = this.productService.list();
  }

  onDelete(productId) {
    this.productService.delete(productId).subscribe((res) => {
      this.products$ = this.productService.list();
    });
  }

  constructor(private productService: ProductService) { }
}

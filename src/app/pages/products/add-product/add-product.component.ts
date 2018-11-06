import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ProductService } from './../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  addProductForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(254)]]
  });

  onSubmit() {
    this.productService.add(this.addProductForm.value.name, this.addProductForm.value.description).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }
}

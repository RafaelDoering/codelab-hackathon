import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  backendURL: string;

  get(productId: number) {
    return this.http.get(`${this.backendURL}/product/${productId}`);
  }

  add(name: string, description: string) {
    return this.http.post(`${this.backendURL}/product`, {name, description});
  }

  delete(productId: number) {
    return this.http.delete(`${this.backendURL}/product/${productId}`);
  }

  list() {
    return this.http.get(`${this.backendURL}/products`);
  }

  constructor(private http: HttpClient) { }
}

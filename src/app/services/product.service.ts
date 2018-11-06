import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  backendURL = 'http://localhost:3000/';

  get(productId: number): Observable<any[]>  {
    return this.http.get<any[]>(`${this.backendURL}product/${productId}`);
  }

  add(name: string, description: string): Observable<any[]>  {
    return this.http.post<any[]>(`${this.backendURL}product`, {name, description});
  }

  delete(productId: number): Observable<any[]>  {
    return this.http.delete<any[]>(`${this.backendURL}product/${productId}`);
  }

  list(): Observable<any[]>  {
    return this.http.get<any[]>(`${this.backendURL}product`);
  }

  constructor(private http: HttpClient) { }
}

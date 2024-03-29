import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Products[];
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('http://localhost:80/products');
  }

  public addProduct(currentProduct: Products) {
    return this.http.post<void>('http://localhost:80/products', currentProduct);
  }
  public deleteProduct(currentProduct: Products) {
    return this.http.post<void>(
      'http://localhost:80/products/delete-product',
      currentProduct
    );
  }
  public editProduct(currentProduct: Products) {
    return this.http.post<void>(
      'http://localhost:80/products/edit-product',
      currentProduct
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../../models/product.model';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private api = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get(this.api);
  }

  getById(id: number) {
    return this.httpClient.get(`${this.api}/${id}`);
  }

  post(product: Product) {
    return this.httpClient.post(this.api, product).pipe(
      catchError((error: any, caught: Observable<any>): Observable<any> => {
        // this.errorMessage = error.message;
        console.error('There was an error!', error);

        // after handling error, return a new observable
        // that doesn't emit any values and completes
        throw new Error(error.message);
      })
    );
  }

  put(id: number, user: Product) {
    return this.httpClient.put(`${this.api}/${id}`, user);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.api}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  newProduct: Product = new Product();

  errorMessage = '';

  constructor(private productService: ProductService) {
    productService.get().subscribe({
      next: (data) => {
        this.products = data as Product[];
      },
      error: (error) => {
        this.errorMessage = 'Some error occurred, please try again';
      },
    });
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe({
      next: (data) => {
        this.products = this.products.filter((p) => p.id != id);
      },
      error: (error) => {
        this.errorMessage = 'Delete failed, please try again';
      },
    });
  }

  addProduct() {
    this.productService.post(this.newProduct).subscribe((data) => {
      this.products.push(data as Product);
    });
  }

  updateProduct(product: Product) {
    this.productService.put(product.id, product).subscribe((data) => {
      let index = this.products.findIndex((p) => p.id == product.id);
      this.products[index] = product;
    });
  }

  sortProductByPrice() {
    this.products = this.products.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      return 0;
    });
  }

  sortProductById() {
    this.products = this.products.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
  }
}

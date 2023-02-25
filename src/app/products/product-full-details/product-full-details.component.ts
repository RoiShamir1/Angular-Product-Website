import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-full-details',
  templateUrl: './product-full-details.component.html',
  styleUrls: ['./product-full-details.component.css'],
})
export class ProductFullDetailsComponent {
  product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.productService.getById(id).subscribe((data) => {
        this.product = data as Product;
      });
    });
  }
}

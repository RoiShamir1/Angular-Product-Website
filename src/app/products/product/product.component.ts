import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  
  @Input() product: Product = new Product();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();

  deleteHandler() {
    this.onDelete.emit(this.product.id);
  }

  updateProject() {
    this.onUpdate.emit(this.product);
  }
}

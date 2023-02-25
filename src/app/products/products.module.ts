import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './product/product.component';
import { ProductFullDetailsComponent } from './product-full-details/product-full-details.component';
import { SubstringPipe } from '../pipes/substring.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductFullDetailsComponent,
    ProductListComponent,
    SubstringPipe,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [ProductService],
  exports: [ProductListComponent],
})
export class ProductsModule {}

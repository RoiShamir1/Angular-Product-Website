import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFullDetailsComponent } from './products/product-full-details/product-full-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductFullDetailsComponent },
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

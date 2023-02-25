import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullDetailsComponent } from './product-full-details.component';

describe('ProductFullDetailsComponent', () => {
  let component: ProductFullDetailsComponent;
  let fixture: ComponentFixture<ProductFullDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFullDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

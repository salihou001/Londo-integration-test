import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaleInfoComponent } from './product-sale-info.component';

describe('ProductSaleInfoComponent', () => {
  let component: ProductSaleInfoComponent;
  let fixture: ComponentFixture<ProductSaleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSaleInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSaleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

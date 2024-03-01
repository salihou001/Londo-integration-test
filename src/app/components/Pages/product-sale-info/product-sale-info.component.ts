import { Component, Input } from '@angular/core';
import { productInfo } from '../../../models/product-info.model';

@Component({
  selector: 'app-product-sale-info',
  standalone: true,
  imports: [],
  templateUrl: './product-sale-info.component.html',
  styleUrl: './product-sale-info.component.scss'
})
export class ProductSaleInfoComponent {
  @Input() product!:productInfo;
}

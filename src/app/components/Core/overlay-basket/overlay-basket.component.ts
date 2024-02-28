import { Component, inject } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';
import { BasketItemComponent } from '../basket-item/basket-item.component';

@Component({
  selector: 'app-overlay-basket',
  standalone: true,
  imports: [BasketItemComponent],
  templateUrl: './overlay-basket.component.html',
  styleUrl: './overlay-basket.component.scss'
})
export class OverlayBasketComponent {
  service = inject(SallerServiceService);
  listBasket = inject(SallerServiceService).listPanier;
  toggleSideBasket(){
    this.service.toggleSideBasket();
  }
}

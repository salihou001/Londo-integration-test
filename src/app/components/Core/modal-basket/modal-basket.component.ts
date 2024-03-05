import { Component, computed, inject, signal } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';
import { BestSeller } from '../../../models/best-seller.model';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal-basket',
  standalone: true,
  imports: [ModalItemComponent],
  templateUrl: './modal-basket.component.html',
  styleUrl: './modal-basket.component.scss'
})
export class ModalBasketComponent {
  sallerService=inject(SallerServiceService);
  sale:BestSeller = {...this.sallerService.phone}
  listPanier = this.sallerService.listPanier;

  total_price(item:BestSeller){
    if(item.quantity && item.second_price){
      item.total_price = item.quantity * Number(item.second_price);
    }
  }
}

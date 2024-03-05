import { Component, computed, inject, signal } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';
import { BestSeller } from '../../../models/best-seller.model';

@Component({
  selector: 'app-modal-basket',
  standalone: true,
  imports: [],
  templateUrl: './modal-basket.component.html',
  styleUrl: './modal-basket.component.scss'
})
export class ModalBasketComponent {
  sallerService=inject(SallerServiceService);
  sale:BestSeller = {...this.sallerService.phone}
  listPanier = this.sallerService.listPanier;

  reduceProduct(sale:any){
    let item_list = this.sallerService.listPanier.find(ele=> ele.id === sale.id)
    
  }
}

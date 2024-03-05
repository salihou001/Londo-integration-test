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

  removeItemSalle(item:BestSeller){
      
    if(this.sallerService.listPanier.length > 0){
      const index = this.sallerService.listPanier.findIndex((el)=> el.id === item.id);
      console.log(index);
      if(index > -1)
      this.sallerService.listPanier.splice(index, 1);
    }else{
      alert('La liste des panier est encore vide!');
    }
  }

  total_price(item:BestSeller){
    if(item.quantity && item.second_price){
      item.total_price = item.quantity * Number(item.second_price);
    }
  }
}

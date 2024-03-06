import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { BestSeller } from '../../../models/best-seller.model';
import { SallerServiceService } from '../../../services/saller-service.service';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
  sallerService = inject(SallerServiceService);
  @Input() seller!:BestSeller;
  @Output() phone = new EventEmitter();
  sendPhone(){  
    this.sallerService.hideMenu();
    this.sallerService.setBasket();
    this.phone.emit(this.seller);
  }

}


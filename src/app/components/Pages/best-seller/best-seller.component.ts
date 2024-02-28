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
  serviceSaller = inject(SallerServiceService);
  @Input() seller!:BestSeller;
  @Output() phone = new EventEmitter();
  sendPhone(){
    this.phone.emit(this.seller);
  }
  toggleBottom(){
    this.serviceSaller.toggleBottom();
  }
}

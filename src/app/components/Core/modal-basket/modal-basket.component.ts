import { Component, inject } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';

@Component({
  selector: 'app-modal-basket',
  standalone: true,
  imports: [],
  templateUrl: './modal-basket.component.html',
  styleUrl: './modal-basket.component.scss'
})
export class ModalBasketComponent {
  sallerService=inject(SallerServiceService);
}

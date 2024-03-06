import { Component, Input, inject, input } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';
import { BestSeller } from '../../../models/best-seller.model';

@Component({
  selector: 'app-modal-item',
  standalone: true,
  imports: [],
  templateUrl: './modal-item.component.html',
  styleUrl: './modal-item.component.scss'
})
export class ModalItemComponent {
  @Input() sale!:BestSeller;
  sallerService= inject(SallerServiceService);
}

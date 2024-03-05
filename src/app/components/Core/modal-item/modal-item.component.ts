import { Component, Input, inject, input } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';

@Component({
  selector: 'app-modal-item',
  standalone: true,
  imports: [],
  templateUrl: './modal-item.component.html',
  styleUrl: './modal-item.component.scss'
})
export class ModalItemComponent {
  @Input() sale!:any;
  sallerService= inject(SallerServiceService);
}

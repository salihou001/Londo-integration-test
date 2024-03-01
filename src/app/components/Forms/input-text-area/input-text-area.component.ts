import { Component, Input, inject } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';

@Component({
  selector: 'app-input-text-area',
  standalone: true,
  imports: [],
  templateUrl: './input-text-area.component.html',
  styleUrl: './input-text-area.component.scss'
})
export class InputTextAreaComponent {
  @Input() name!:string;
  @Input() label!:string;
  @Input() entity:any;
  sallerService = inject(SallerServiceService);
  // 
  onChange(value:string){
    this.sallerService.user[this.name] = value;
  }
}

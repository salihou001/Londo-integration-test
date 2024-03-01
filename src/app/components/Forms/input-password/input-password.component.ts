import { Component, Input, inject } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent {
  @Input() name!:string;
  @Input() label!:string;
  @Input() entity:any;
  sallerService = inject(SallerServiceService);
  // 
  onChange(value:string){
    this.sallerService.user[this.name] = value;
  }
}

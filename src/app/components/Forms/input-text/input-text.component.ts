import { Component, Input, inject } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  @Input() name!:string;
  @Input() label!:string;
  @Input() entity:any;
  sallerService = inject(SallerServiceService);
  // 
  onChange(value:string){
    this.sallerService.user[this.name] = value;
  }
}

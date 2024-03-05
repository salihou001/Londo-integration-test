import { Component, Input, inject } from '@angular/core';
import { SallerServiceService } from '../../../services/saller-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {
  @Input() name!:string;
  @Input() listOptions!:Array<string>;
  sallerService = inject(SallerServiceService);
  tmp!:string;
  // 
  onChange(){
    this.sallerService.user[this.name] = this.tmp;
  }
}

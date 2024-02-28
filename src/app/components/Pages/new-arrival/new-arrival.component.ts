import { Component, Input } from '@angular/core';
import { NewArrival } from '../../../models/new-arrival.model';

@Component({
  selector: 'app-new-arrival',
  standalone: true,
  imports: [],
  templateUrl: './new-arrival.component.html',
  styleUrl: './new-arrival.component.scss'
})
export class NewArrivalComponent {
  @Input() items!:NewArrival;
}

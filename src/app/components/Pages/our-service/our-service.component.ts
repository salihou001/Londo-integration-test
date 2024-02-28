import { Component, Input } from '@angular/core';
import { OurService } from '../../../models/our-service.model';

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss'
})
export class OurServiceComponent {
  @Input() service!:OurService;
}

import { Component, Input } from '@angular/core';
import { MenuDetail } from '../../../models/menu-detail.model';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [],
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.scss'
})
export class MenuDetailComponent {
  @Input() items!:MenuDetail;
}

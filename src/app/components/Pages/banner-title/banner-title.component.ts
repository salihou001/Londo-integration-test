import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-title',
  standalone: true,
  imports: [],
  templateUrl: './banner-title.component.html',
  styleUrl: './banner-title.component.scss'
})
export class BannerTitleComponent {
  @Input() listTitle!: Array<string>;
}

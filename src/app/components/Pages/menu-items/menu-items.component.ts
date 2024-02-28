import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItems } from '../../../models/menu-items.model';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
  @Input() items!:MenuItems;
  @Output() url= new EventEmitter<string>;
  // methode permettant d'envoyer l'url d'un menu
  sendUrl(){
    this.url.emit(this.items.url);
  }
}

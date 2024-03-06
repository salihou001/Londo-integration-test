import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { MenuItems } from '../../../models/menu-items.model';
import { SallerServiceService } from '../../../services/saller-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuItemsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router)
  // isSomething = inject(SallerServiceService).listPanier.length;
  sallerService = inject(SallerServiceService);

  compteur_menu=0
  listItems: Array<MenuItems>=[
    { id: 1,icon: 'Vector-2',url: 'smartphone',name: 'Smartphones'},
    { id: 2,icon: 'Vector-3',url: 'accesoire',name: 'Accesoires'},
    { id: 3,icon: 'smart',url: 'tablet',name: 'Tablets'},
    { id: 4,icon: 'sale',url: 'sale',name: 'Sale!'},
  ]
  toggleMenu(){
    if(this.compteur_menu === 0){
      this.sallerService.hideMenu();
      this.compteur_menu++;
    }else{
      this.sallerService.showMenu();
      this.compteur_menu--;
    }
  }
  //
  getUrl(url: string){
    const listUrl = ['smartphone','accesoire','tablet','sale'];
    if(listUrl.includes(url)){
      if(url === 'smartphone'){
        this.router.navigate([url]);
        this.sallerService.hideMenu();
      }
    }
  }
  //
  goHome(){
    this.router.navigate(['']);
  }
  // 
  toggleSideBasket(){
    this.sallerService.toggleSideBasket();
  }
}

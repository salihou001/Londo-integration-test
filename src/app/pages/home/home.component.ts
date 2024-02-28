import { Component, inject } from '@angular/core';
import { MenuItems } from '../../models/menu-items.model';
import { MenuDetail } from '../../models/menu-detail.model';
import { NewArrival } from '../../models/new-arrival.model';
import { BestSeller } from '../../models/best-seller.model';
import { OurService } from '../../models/our-service.model';
import { MenuItemsComponent } from '../../components/Pages/menu-items/menu-items.component';
import { MenuDetailComponent } from '../../components/Pages/menu-detail/menu-detail.component';
import { NewArrivalComponent } from '../../components/Pages/new-arrival/new-arrival.component';
import { BestSellerComponent } from '../../components/Pages/best-seller/best-seller.component';
import { BannerTitleComponent } from '../../components/Pages/banner-title/banner-title.component';
import { OurServiceComponent } from '../../components/Pages/our-service/our-service.component';
import { HeaderComponent } from '../../components/Pages/header/header.component';
import { FooterComponent } from '../../components/Pages/footer/footer.component';
import { SallerServiceService } from '../../services/saller-service.service';
import { Router } from '@angular/router';
import { OverlayBasketComponent } from '../../components/Core/overlay-basket/overlay-basket.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuItemsComponent,
    MenuDetailComponent,
    NewArrivalComponent,
    BestSellerComponent,
    BannerTitleComponent,
    OurServiceComponent,
    HeaderComponent,
    FooterComponent,
    OverlayBasketComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  router = inject(Router)
  sallerService = inject(SallerServiceService)
  listItems: Array<MenuItems>=[
    { id: 1,icon: 'Vector-2',url: 'smartphone',name: 'Smartphones'},
    { id: 2,icon: 'Vector-3',url: 'accesoire',name: 'Accesoires'},
    { id: 3,icon: 'smart',url: 'tablet',name: 'Tablets'},
    { id: 4,icon: 'sale',url: 'sale',name: 'Sale!'},
  ]
  listDetail: Array<MenuDetail> = [
    { id: 1,icon: 'Vector-2',info1: 'Call us',info2: '+242 06 908 3535'},
    { id: 2,icon: 'Vector-3',info1: 'Shipping',info2: 'Everywhere in Congo'},
    { id: 3,icon: 'smart',info1: 'Work with us',info2: 'Become our consultant'},
  ]
  listNewArrival: Array<NewArrival>=[
    { id: 1,icon: 'Android_greenrobot',url: 'zozor',name: 'Smartphones'},
    { id: 2,icon: 'apple',url: 'zozor',name: 'Accesoires'}
  ]
  listBestSeller: Array<BestSeller> = [
    {id:1,image: 'image 2-1',info1: 'Xiaomi',info2: 'Redmi 6A Dual SIM 16GB HDD - 2GB RAM - Gold- 12 Months ...',first_price: '99,900', second_price: '59,900', reduction: 40, first_best_seller: true},
    {id:2,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: '66,000', reduction: 33, first_best_seller: false},
    {id:3,image: 'imgNew',info1: 'Orange',info2: 'Rise 53 Dual SIM 8GB HDD - White - 12 Months',first_price: '48,000', second_price: '29,900  FCFA', reduction: 38, first_best_seller: false},
    {id:4,image: 'image 2_t',info1: 'Apple',info2: 'iPhone 8 64GB HDD - Gold',first_price: '', second_price: '490,000', reduction: 0, first_best_seller: false},
    {id:5,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000  FCFA', second_price: '184,900', reduction: 38, first_best_seller: false},
  ]
  listBestSale: Array<BestSeller> = [
    {id:2,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: '66,000', reduction: 33, first_best_seller: false},
    {id:2,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: '66,000', reduction: 33, first_best_seller: false},
    {id:3,image: 'imgNew',info1: 'Orange',info2: 'Rise 53 Dual SIM 8GB HDD - White - 12 Months',first_price: '48,000', second_price: '29,900  FCFA', reduction: 38, first_best_seller: false},
    // {id:4,image: 'image 2_t',info1: 'Apple',info2: 'iPhone 8 64GB HDD - Gold',first_price: '', second_price: '490,000', reduction: 0, first_best_seller: false},
    {id:5,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000  FCFA', second_price: '184,900', reduction: 38, first_best_seller: false},
    {id:5,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000  FCFA', second_price: '184,900', reduction: 38, first_best_seller: false},
  ]
  listService: Array<OurService>=[
    {id:1 ,image :'image-1', title: 'Fast delivery'},
    {id:2 ,image :'image 2', title: 'Best prices in Congo'},
    {id:3 ,image :'image 2.1', title: 'Warranty and post warranty service'},
    {id:4 ,image :'image 3.1', title: 'Guaranteed return and exchange'},
    {id:5 ,image :'image 3', title: 'Certified products'},
  ]
  // 
  getPhone(phone:BestSeller){
    this.sallerService.phone = phone;
    this.router.navigate(['smartphone']);
  }
}
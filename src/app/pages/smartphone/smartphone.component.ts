import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerTitleComponent } from '../../components/Pages/banner-title/banner-title.component';
import { BestSellerComponent } from '../../components/Pages/best-seller/best-seller.component';
import { HeaderComponent } from '../../components/Pages/header/header.component';
import { FooterComponent } from '../../components/Pages/footer/footer.component';
import { BestSeller } from '../../models/best-seller.model';
import { SallerServiceService } from '../../services/saller-service.service';
import { OverlayBasketComponent } from '../../components/Core/overlay-basket/overlay-basket.component';
import { ModalBasketComponent } from '../../components/Core/modal-basket/modal-basket.component';

@Component({
  selector: 'app-smartphone',
  standalone: true,
  imports: [
    BannerTitleComponent,
    BestSellerComponent,
    HeaderComponent,
    FooterComponent,
    OverlayBasketComponent,
    ModalBasketComponent
  ],
  templateUrl: './smartphone.component.html',
  styleUrl: './smartphone.component.scss'
})
export class SmartphoneComponent implements OnInit{
  router = inject(Router)
  sallerService=inject(SallerServiceService);
  activatedRoute=inject(ActivatedRoute);
  phone!:BestSeller;

  listStorage:Array<string>=[]

  ngOnInit(): void {
    this.phone = this.sallerService.phone;
    this.sallerService.hideMenu();
    this.activatedRoute.data.subscribe((data:any) => {
      if (data) {
        document.getElementById(data.fragment)?.scrollIntoView();
      }
    });

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      const value = localStorage.getItem(key) as string;
      this.listStorage.push(value);
    }
    console.log(this.listStorage);
  }
  listBestSeller: Array<BestSeller> = [
    {id:1,image: 'image 2-1',info1: 'Xiaomi',info2: 'Redmi 6A Dual SIM 16GB HDD - 2GB RAM - Gold- 12 Months ...',first_price: '99,900', second_price: '59,900', reduction: 40, first_best_seller: true,quantity:1,total_price:1},
    {id:2,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: '66,000', reduction: 33, first_best_seller: true,quantity:1,total_price:1},
    {id:3,image: 'imgNew',info1: 'Orange',info2: 'Rise 53 Dual SIM 8GB HDD - White - 12 Months',first_price: '48,000', second_price: '29,900', reduction: 38, first_best_seller: true,quantity:1,total_price:1},
    {id:4,image: 'image 2_t',info1: 'Apple',info2: 'iPhone 8 64GB HDD - Gold',first_price: '', second_price: '490,000', reduction: 0, first_best_seller: true,quantity:1,total_price:1},
    {id:5,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000', second_price: '184,900', reduction: 38, first_best_seller: true,quantity:1,total_price:1},
  ]
  
  getPhone(phone:BestSeller){
    this.sallerService.phone = phone;
    this.router.navigate(['smartphone']);
    this.ngOnInit()
  }

  // saveOnBasket(){
  //   if(this.sallerService.listPanier.length === 0){
  //     this.sallerService.listPanier.push(this.sallerService.phone);
  //   }else{
  //     if(!this.isPhone(this.sallerService.listPanier,this.sallerService.phone)){
  //       this.sallerService.listPanier.push(this.sallerService.phone);
  //     }else{
  //       alert('il exite déja dans votre pannier');
  //     }
  //   }
  //   console.log(this.sallerService.listPanier);
  //   this.router.navigate([''],{data: 'super'});
  // }

  // isPhone(arrayPhone:Array<BestSeller>,phone:BestSeller){
  //   if(arrayPhone.find((item)=> item.id === phone.id)){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}

import { Component, OnInit, inject } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
import gsap from 'gsap';
import { OverlayBasketComponent } from '../../components/Core/overlay-basket/overlay-basket.component';
import { ModalBasketComponent } from '../../components/Core/modal-basket/modal-basket.component';

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
    OverlayBasketComponent,
    ModalBasketComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  router = inject(Router)
  sallerService = inject(SallerServiceService)
  activatedRoute=inject(ActivatedRoute);
  
  compteur_img=0
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any) => {
      if (data) {
        document.getElementById(data.fragment)?.scrollIntoView();
      }
    });
    this.sallerService.isSomething();
    // this.sallerService.setBasket();
  }

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
    {id:1,image: 'image 2-1',info1: 'Xiaomi',info2: 'Redmi 6A Dual SIM 16GB HDD - 2GB RAM - Gold- 12 Months ...',first_price: '99,900', second_price: 59900, reduction: 40, first_best_seller: true,quantity:1,total_price:1},
    {id:2,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: 66000, reduction: 33, first_best_seller: true,quantity:1,total_price:1},
    {id:3,image: 'imgNew',info1: 'Orange',info2: 'Rise 53 Dual SIM 8GB HDD - White - 12 Months',first_price: '48000', second_price: 29900, reduction: 38, first_best_seller: true,quantity:1,total_price:1},
    {id:4,image: 'image 2_t',info1: 'Apple',info2: 'iPhone 8 64GB HDD - Gold',first_price: '', second_price: 490000, reduction: 0, first_best_seller: true,quantity:1,total_price:1},
    {id:5,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000', second_price: 184900, reduction: 38, first_best_seller: true,quantity:1,total_price:1},
  ]
  listBestSale: Array<BestSeller> = [
    {id:6,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: 66000, reduction: 33, first_best_seller: false},
    {id:7,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: 66000, reduction: 33, first_best_seller: false},
    {id:8,image: 'imgNew',info1: 'Orange',info2: 'Rise 53 Dual SIM 8GB HDD - White - 12 Months',first_price: '48,000', second_price: 29900, reduction: 38, first_best_seller: false},
    {id:9,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000  FCFA', second_price: 184900, reduction: 38, first_best_seller: false},
    {id:9,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000  FCFA', second_price: 184900, reduction: 38, first_best_seller: false},
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
  prevuisImage(){
    const TL = gsap.timeline();
    if(this.compteur_img === 1){
      TL
        .to('.rows',{
          x:'*',
          duration: .5,
          ease: 'Since.in'
        })
        .to('.li_one',{
          opacity:1,
          duration: .3,
          ease: 'Since.in'
        },"<")
        .to('.li_two',{
          opacity:.5,
          duration: .3,
          ease: 'Since.in'
        },"<")
        this.compteur_img--
    }else{
      if(this.compteur_img === 2){
        TL
        .to('.rows',{
          x:'-100%',
          duration: .5,
          ease: 'Since.in'
        })
        .to('.li_two',{
          opacity:1,
          duration: .3,
          ease: 'Since.in'
        },"<")
        .to('.li_tree',{
          opacity:.5,
          duration: .3,
          ease: 'Since.in'
        },"<")
        this.compteur_img--
      }else{
        if(this.compteur_img === 3){
          TL
          .to('.rows',{
            x:'-200%',
            duration: .5,
            ease: 'Since.in'
          })
          .to('.li_tree',{
            opacity:1,
            duration: .3,
            ease: 'Since.in'
          },"<")
          .to('.li_four',{
            opacity:.5,
            duration: .3,
            ease: 'Since.in'
          },"<")
          this.compteur_img--
        }else{
          if(this.compteur_img === 4){
            TL
            .to('.rows',{
              x:'-300%',
              duration: .5,
              ease: 'Since.in'
            })
            .to('.li_four',{
              opacity:1,
              duration: .3,
              ease: 'Since.in'
            },"<")
            .to('.li_five',{
              opacity:.5,
              duration: .3,
              ease: 'Since.in'
            },"<")
            this.compteur_img--
          }else{
            if(this.compteur_img === 5){
              TL
                .to('.rows',{
                  x:'-400%',
                  duration: .5,
                  ease: 'Since.in'
                })
                .to('.li_four',{
                  opacity:1,
                  duration: .3,
                  ease: 'Since.in'
                },"<")
                .to('.li_five',{
                  opacity:.5,
                  duration: .3,
                  ease: 'Since.in'
                },"<")
                this.compteur_img--
            } 
          }
        }
      }
    }
  }
  nextImage(){
    const TL = gsap.timeline();
    if(this.compteur_img === 0){
      TL
        .to('.rows',{
          x:'-100%',
          duration: .5,
          ease: 'Since.in'
        })
        .to('.li_one',{
          opacity:.5,
          duration: .3,
          ease: 'Since.in'
        },"<")
        .to('.li_two',{
          opacity:1,
          duration: .3,
          ease: 'Since.in'
        },"<")
        this.compteur_img++
    }else{
      if(this.compteur_img === 1){
        TL
        .to('.rows',{
          x:'-200%',
          duration: .5,
          ease: 'Since.in'
        })
        .to('.li_two',{
          opacity:.5,
          duration: .3,
          ease: 'Since.in'
        },"<")
        .to('.li_tree',{
          opacity:1,
          duration: .3,
          ease: 'Since.in'
        },"<")
        this.compteur_img++
      }else{
        if(this.compteur_img === 2){
          TL
            .to('.rows',{
              x:'-300%',
              duration: .5,
              ease: 'Since.in'
            })
            .to('.li_tree',{
              opacity:.5,
              duration: .3,
              ease: 'Since.in'
            },"<")
            .to('.li_four',{
              opacity:1,
              duration: .3,
              ease: 'Since.in'
            },"<")
            this.compteur_img++
        }else{
          if(this.compteur_img === 3){
            TL
            .to('.rows',{
              x:'-400%',
              duration: .5,
              ease: 'Since.in'
            })
            .to('.li_four',{
              opacity:.5,
              duration: .3,
              ease: 'Since.in'
            },"<")
            .to('.li_five',{
              opacity:1,
              duration: .3,
              ease: 'Since.in'
            },"<")
            this.compteur_img++
          }
        }
      }
    }
  }
}

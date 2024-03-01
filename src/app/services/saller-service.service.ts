import { Injectable, OnInit, computed, inject, signal } from '@angular/core';
import { BestSeller } from '../models/best-seller.model';
import gsap from 'gsap';
import { Router } from '@angular/router';
import { productInfo } from '../models/product-info.model';

@Injectable({
  providedIn: 'root'
})
export class SallerServiceService {
  router = inject(Router)

  phone!: BestSeller;
  compteur_menu = 0
  listPanier: Array<BestSeller> = [];
  toggle = 0;
  toggle_1 = 0;
  user: any = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    address: ''
  };
  nbr_1 = signal(1);
  prix_uni_1 = signal(159900);
  nbr_2 = signal(1);
  prix_uni_2 = signal(159900);

  total_1 = computed(() => this.nbr_1() * this.prix_uni_1());
  total_2 = computed(() => this.nbr_2() * this.prix_uni_2());
  total = computed(() => this.total_1() + this.total_2());

  listSaleProduct: productInfo[] = [
    { id: 1, description: 'Apple iPhone 6 64GB HDD - 12 Months + Cover + Screen ...', image: 'Group 4-2', firstPrice: 250000, secondPrice: 159900, quantity: 1, price: 1 },
    { id: 2, description: 'Apple iPhone 6 64GB HDD - 12 Months + Cover + Screen ...', image: 'Group 4-1', firstPrice: 150000, secondPrice: 100900, quantity: 1, price: 1 }
  ]

  addProduct_1() {
    this.nbr_1.update(nbr_1 => nbr_1 + 1);
  }

  reduceProduct_1() {
    if (this.nbr_1() > 0) {
      this.nbr_1.update(nbr_1 => nbr_1 - 1);
    }
  }

  addProduct_2() {
    this.nbr_2.update(nbr_2 => nbr_2 + 1);
  }

  reduceProduct_2() {
    if (this.nbr_2() > 0) {
      this.nbr_2.update(nbr_1 => nbr_1 - 1);
    }
  }

  checkout() {
    this.router.navigate(['checkout'],{fragment: 'super'})
  }

  toggleSideBasket() {
    if (this.toggle === 0) {
      gsap.to('.overlay_basket', {
        x: '0%',
        duration: .5,
        ease: 'Since.out'
      })
      this.toggle++
    } else {
      gsap.to('.overlay_basket', {
        x: '100%',
        duration: .5,
        ease: 'Since.out'
      })
      this.toggle--
    }
  }

  toggleBottom(seller: BestSeller) {
    console.log(seller);
    if (this.toggle_1 === 0) {
      gsap.to(`#card_${seller.id}`, {
        display: 'block',
        duration: .1,
        ease: 'Since.out'
      })
      this.toggle_1++
    } else {
      gsap.to(`#card_${seller.id}`, {
        display: 'none',
        duration: .1,
        ease: 'Since.out'
      })
      this.toggle_1--
    }
  }
}

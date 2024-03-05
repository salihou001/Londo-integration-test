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

  compteur_menu = 0
  phone!: BestSeller;
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

  total = 0

  listSaleProduct: productInfo[] = [
    { id: 1, description: 'Apple iPhone 6 64GB HDD - 12 Months + Cover + Screen ...', image: 'Group 4-2', firstPrice: 250000, secondPrice: 159900, quantity: 1, price: 1 },
    { id: 2, description: 'Apple iPhone 6 64GB HDD - 12 Months + Cover + Screen ...', image: 'Group 4-1', firstPrice: 150000, secondPrice: 100900, quantity: 1, price: 1 }
  ]

  checkout() {
    this.router.navigate(['checkout'])
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
  // show
  showBottomCard(seller: BestSeller){
    gsap.to(`#card_${seller.id}`, {
      display: 'block',
      duration: .1,
      ease: 'Since.out'
    })
  }
  // hide
  hideBottomCard(seller: BestSeller){
    gsap.to(`#card_${seller.id}`, {
      display: 'none',
      duration: .1,
      ease: 'Since.out'
    })
  }
  //
  showMenu(){
    gsap.to('.toggle_menu',{
      opacity: 1,
      duration: .3
    })
  }
  hideMenu(){
    gsap.to('.toggle_menu',{
      opacity: 0,
      duration: .3
    })
  }
  // 
  saveOnBasket(){
    if(this.listPanier.length === 0){
      this.listPanier.push(this.phone);
    }else{
      if(!this.isPhone(this.listPanier,this.phone)){
        this.listPanier.push(this.phone);
        localStorage.setItem(`item-${this.phone.id}`,String(this.phone.id));
      }else{
        alert('il exite déja dans votre pannier');
      }
    }
    console.log(this.listPanier);
    this.router.navigate(['']);
  }

  isPhone(arrayPhone:Array<BestSeller>,phone:BestSeller){
    if(arrayPhone.find((item)=> item.id === phone.id)){
      return true;
    }else{
      return false;
    }
  }

  addQuantityProduct(item:BestSeller){
    // console.log(item.quantity)
    if(item){
      if(item.quantity){
        item.quantity++;
        this.total_price(item);
      }
    }
  }

  reduceQuantityProduct(item:BestSeller){
    // console.log(item.quantity);
    if(item){
      if(item.quantity){
        if(item.quantity > 1){
          item.quantity--;
        }
        this.total_price(item);
      }
    }
  }

  total_price(item:BestSeller){
    if(item.quantity && item.second_price){
      item.total_price = item.quantity * item.second_price;
    }
  }

  calcul_total(){
    if(this.listPanier.length >0){
      return this.listPanier.reduce((total,item)=> (item.total_price) ? total + item.total_price :0,0);
    }else{
      return 0;
    }
  }
}

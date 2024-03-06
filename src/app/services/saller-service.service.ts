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
  listBestSeller: Array<BestSeller> = [
    {id:1,image: 'image 2-1',info1: 'Xiaomi',info2: 'Redmi 6A Dual SIM 16GB HDD - 2GB RAM - Gold- 12 Months ...',first_price: '99,900', second_price: 59900, reduction: 40, first_best_seller: true,quantity:1,total_price:1},
    {id:2,image: 'image 3-1',info1: 'UMIDIGI',info2: 'C Note Dual SIM 32GB HDD - 3GB RAM - 13MP - Gold - 12 Months',first_price: '99,900', second_price: 66000, reduction: 33, first_best_seller: true,quantity:1,total_price:1},
    {id:3,image: 'imgNew',info1: 'Orange',info2: 'Rise 53 Dual SIM 8GB HDD - White - 12 Months',first_price: '48000', second_price: 29900, reduction: 38, first_best_seller: true,quantity:1,total_price:1},
    {id:4,image: 'image 2_t',info1: 'Apple',info2: 'iPhone 8 64GB HDD - Gold',first_price: '', second_price: 490000, reduction: 0, first_best_seller: true,quantity:1,total_price:1},
    {id:5,image: 'imageNew_2',info1: 'Samsung',info2: 'Galaxy S7 Edge 32GB HDD - 4GB RAM - Gold - 12 Months + Cover...',first_price: '250,000', second_price: 184900, reduction: 38, first_best_seller: true,quantity:1,total_price:1},
  ];
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
  saveOnBasket(phone:BestSeller){
    if(this.listPanier.length === 0){
      this.listPanier.push(phone);
    }else{
      if(!this.isPhone(this.listPanier,phone)){
        this.listPanier.push(phone);
        localStorage.setItem(`item-${phone.id}`,String(phone.id));
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

  removeItemSalle(item:BestSeller){
      
    if(this.listPanier.length > 0){
      const index = this.listPanier.findIndex((el)=> el.id === item.id);
      console.log(index);
      if(index > -1)
      this.listPanier.splice(index, 1);
    }else{
      alert('La liste des panier est encore vide!');
    }
    // retirer l'id de l'article dans le localStorage
    const itemStorage = localStorage.getItem( `item-${item.id}`);
    if(itemStorage){
      // console.log(itemStorage)
      localStorage.removeItem('item-'+itemStorage);
    }
  }

  setBasket(){
    let item;
    // boucles sur tout les elements present dans le localstorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      const value = localStorage.getItem(key) as string;
      item = this.listBestSeller.find(el => el.id === Number(value));
    }
    if(item){
      if(!this.isPhone(this.listPanier,item)){
        this.listPanier.push(item);
      }
    }
    this.isSomething();
  }

  isSomething(){
    return this.listPanier.length;
  }
}

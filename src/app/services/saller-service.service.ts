import { Injectable } from '@angular/core';
import { BestSeller } from '../models/best-seller.model';
import gsap from 'gsap';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SallerServiceService {
  phone!:BestSeller;
  listPanier:Array<BestSeller>=[];
  toggle=0;
  toggle_1=0;
  user:any = {
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    password: ''
  };

  toggleSideBasket(){
    if(this.toggle === 0){
      gsap.to('.overlay_basket',{
        x: '0%',
        duration: .5,
        ease: 'Since.out'
      })
      this.toggle++
    }else{
      gsap.to('.overlay_basket',{
        x: '100%',
        duration: .5,
        ease: 'Since.out'
      })
      this.toggle--
    }
  }
  toggleBottom(){
    if(this.toggle_1 === 0){
      gsap.to('.toggleBottom',{
        display: 'block',
        duration: .1,
        ease: 'Since.out'
      })
      this.toggle_1++
    }else{
      gsap.to('.toggleBottom',{
        display: 'none',
        duration: .1,
        ease: 'Since.out'
      })
      this.toggle_1--
    }
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerTitleComponent } from '../../components/Pages/banner-title/banner-title.component';
import { InputTextComponent } from '../../components/Forms/input-text/input-text.component';
import { InputSelectComponent } from '../../components/Forms/input-select/input-select.component';
import { SallerServiceService } from '../../services/saller-service.service';
import { User } from '../../models/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModalBasketComponent } from '../../components/Core/modal-basket/modal-basket.component';
import { ProductSaleInfoComponent } from '../../components/Pages/product-sale-info/product-sale-info.component';
import { productInfo } from '../../models/product-info.model';
import gsap from 'gsap';
import { InputPasswordComponent } from '../../components/Forms/input-password/input-password.component';
import { InputTextAreaComponent } from '../../components/Forms/input-text-area/input-text-area.component';
import { ModalItemComponent } from '../../components/Core/modal-item/modal-item.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    BannerTitleComponent,
    InputTextComponent,
    InputSelectComponent,
    HttpClientModule,
    ModalBasketComponent,
    ProductSaleInfoComponent,
    InputPasswordComponent,
    InputTextAreaComponent,
    ModalItemComponent
  ],
  providers: [HttpClient],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  step = 0
  activatedRoute=inject(ActivatedRoute);
  router = inject(Router);
  sallerService = inject(SallerServiceService);
  entity!:User;
  http = inject(HttpClient);
  listSaleProduct!:productInfo[];
  error!: boolean|null;

  ngOnInit(): void {
    this.listSaleProduct = this.sallerService.listSaleProduct;
    // this.sallerService.listSaleProduct[0].quantity = this.sallerService.nbr_1();
    // this.sallerService.listSaleProduct[1].quantity = this.sallerService.nbr_2();

    this.activatedRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView();
      }
    });
  }
  goHome(){
    this.router.navigate(['']);
  }
  //
  toggleModeOldUser(){
    let login = document.querySelector('.login') as HTMLDivElement;
    let sign = document.querySelector('.sign') as HTMLDivElement;
    let new_ser = document.querySelector('.new_user') as HTMLButtonElement;
    let old_user = document.querySelector('.old_user') as HTMLButtonElement;
      login.style.display = 'block';
      sign.style.display = 'none';
      old_user.style.background = '#FCEDEE'
      old_user.style.color = '#ED1C24'
      new_ser.style.background = '#E9E9F0'
      new_ser.style.color = '#5C5C73'
  }
  toggleModeNewUser(){
    let login = document.querySelector('.login') as HTMLDivElement;
    let sign = document.querySelector('.sign') as HTMLDivElement;
    let new_ser = document.querySelector('.new_user') as HTMLButtonElement;
    let old_user = document.querySelector('.old_user') as HTMLButtonElement;
    login.style.display = 'none';
      sign.style.display = 'block';
      new_ser.style.background = '#FCEDEE'
      new_ser.style.color = '#ED1C24'
      old_user.style.background = '#E9E9F0'
      old_user.style.color = '#5C5C73'
  }
  // 
  nextStep(){
    let login = document.querySelector('.logins') as HTMLElement;
    let contact = document.querySelector('.contact') as HTMLElement;
    let address = document.querySelector('.address') as HTMLElement;
    let user_info = document.querySelector('.user_info') as HTMLElement;
    let address_delivery = document.querySelector('.address_delivery') as HTMLElement;
    let success_1 = document.querySelector('.succes_1') as HTMLElement;
    let success_2 = document.querySelector('.succes_2') as HTMLElement;
    let success_3 = document.querySelector('.succes_3') as HTMLElement;
    let payement_method = document.querySelector('.payement_method') as HTMLElement;
    let address_info = document.querySelector('.address_info') as HTMLElement;
    let title_3 = document.querySelector('.title_3') as HTMLElement;
  
    if(this.step === 0){
      login.style.display = 'none';
      contact.style.color = '#14CB04';
      user_info.style.display = 'block';
      address_delivery.style.display = 'block';
      success_1.style.display = 'block';
      this.step++;
    }else{
      if(this.step === 1){
        payement_method.style.display = 'block';
        address.style.color = '#14CB04';
        address_info.style.display = 'block';
        address_delivery.style.display = 'none';
        success_2.style.display = 'block';
        this.step++;
      }else{
        if(this.step === 2){
          payement_method.style.display = 'none';
          success_3.style.display= 'block';
          title_3.style.color= '#14CB04';
        }
      }
    }
  }
  //
  prevuisStep(){
    let login = document.querySelector('.logins') as HTMLElement;
    let contact = document.querySelector('.contact') as HTMLElement;
    let address = document.querySelector('.address') as HTMLElement;
    let user_info = document.querySelector('.user_info') as HTMLElement;
    let address_delivery = document.querySelector('.address_delivery') as HTMLElement;
    let success_1 = document.querySelector('.succes_1') as HTMLElement;
    let success_2 = document.querySelector('.succes_2') as HTMLElement;
    let payement_method = document.querySelector('.payement_method') as HTMLElement;
    let payement = document.querySelector('.payement') as HTMLElement;
    let success_3 = document.querySelector('.succes_3') as HTMLElement;
    let address_info = document.querySelector('.address_info') as HTMLElement;

    if(this.step === 2){
      login.style.display = 'none';
      user_info.style.display = 'block';
      address.style.color = '#0000';
      payement_method.style.display = 'none';
      address.style.display = 'none';
      address_info.style.display = 'none';
      success_3.style.display = 'none';
      payement.style.color = '#000';
      address_delivery.style.display = 'block';
      success_2.style.display = 'none';
      this.step--;
    }else{
      if(this.step	=== 1 ){
        login.style.display = 'block';
        user_info.style.display = 'none';
        address_delivery.style.display = 'none';
        address_info.style.display = 'none';
        contact.style.color = '#000';
        success_1.style.display = 'none';
        this.step--;
      }
    }
  }
  //
  modeCash(){
    let cash = document.querySelector('.cash') as HTMLElement;
    let mtn = document.querySelector('.mtn') as HTMLElement;
    cash.style.display = 'block';
    mtn.style.display = 'none';
  }
  //
  modeMtn(){
    let cash = document.querySelector('.cash') as HTMLElement;
    let mtn = document.querySelector('.mtn') as HTMLElement;
    cash.style.display = 'none';
    mtn.style.display = 'block';
  }
  // 
  async goToLogin(){
    const data = this.sallerService.user as User;
    const { firstName, lastName, phone, email, password } = data;
    console.log(data)

    this.http.post("http://localhost:3000/auth/signUp", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        email,
        password
      }),
    }).subscribe((data) => {
      console.log(data);
      if (data) {
        setTimeout(()=>{
          this.toggleModeOldUser();
        },3500)
        this.toggleLoader()
      }
    }, (error) => {
      console.log(error);
    })
  }
  // 
  async login(){
    this.error = false;
    const data = this.sallerService.user as User;
    const { email, password } = data;
    
    const response = this.http.post("http://localhost:3000/auth/signIn", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    // loader 
    this.toggleLoader();
    // result management
    response.subscribe((data:any)=>{
      if(data.response){  
          setTimeout(()=>{
            this.nextStep();
          },3500)
      }else{
        // console.log(data);
        if(data.error === 'User not found please register before'){
          setTimeout(()=>{
            this.error = true
          },3400)
        }
        setTimeout(()=>{
          this.error = true
        },3400)
      }
    })
  }
  
  toPayement(){
    console.log(this.sallerService.user);
    this.toggleLoader();
      setTimeout((verdict)=>{
        this.nextStep();
      },4000)
  }
  // 
  toggleLoader(){
    const TL = gsap.timeline();
    TL
      .to('.loader',{
        display: 'block',
        duration: .1,
        ease: 'power4.out'
      })
      .to('.loader',{
        display: 'none',
        duration: .1,
        delay: 4,
        ease: 'power4.out'
      })
  }

  finalStep(){
    this.toggleLoader();

    setTimeout((verdict)=>{
      this.nextStep();
    },4000)
    gsap.to('.edit',{
      display: 'none',
      duration: .1,
      delay:4,
      ease: 'Since.out'
    })
  }

  goToSmartphone(){
    this.router.navigate(['smartphone']);
  }
}

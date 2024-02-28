import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BannerTitleComponent } from '../../components/Pages/banner-title/banner-title.component';
import { InputTextComponent } from '../../components/Forms/input-text/input-text.component';
import { InputSelectComponent } from '../../components/Forms/input-select/input-select.component';
import { SallerServiceService } from '../../services/saller-service.service';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [BannerTitleComponent,InputTextComponent,InputSelectComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  separateur = 1;
  step = 0
  router = inject(Router)
  sallerService = inject(SallerServiceService);
  entity!:User;
  http = inject(HttpClient);


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
    let payement_method = document.querySelector('.payement_method') as HTMLElement;
    let address_info = document.querySelector('.address_info') as HTMLElement;
  
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
    // let address_info = document.querySelector('.address_info') as HTMLElement;

    if(this.step === 2){
      login.style.display = 'none';
      user_info.style.display = 'block';
      address.style.color = '#0000';
      payement_method.style.display = 'none';
      address_delivery.style.display = 'none';
      payement_method.style.display = 'none';
      address_delivery.style.display = 'block';
      success_2.style.display = 'none';
      this.step--;
    }else{
      if(this.step	=== 1 ){
        login.style.display = 'block';
        user_info.style.display = 'none';
        address_delivery.style.display = 'none';
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
  goToLogin(){
    const data = this.sallerService.user;
    this.http.post("localhost:3000/auth/signUp",data).subscribe((data)=>{
      console.log("Envoie des données de l'utilisateur reussit");
    },(error)=>{
      console.log("Erreur lors de l'envoie de données")
    })
    // this.nextStep()
  }
}

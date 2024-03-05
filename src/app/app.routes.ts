import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SmartphoneComponent } from './pages/smartphone/smartphone.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    { 
        path : '',
        component: HomeComponent,
        data:{
            fragment:'super'
        }
    },
    { 
        path : 'smartphone',
        component: SmartphoneComponent,
        data:{
            fragment:'super'
        }
    },
    { 
        path : 'checkout',
         component: CheckoutComponent,
         data:{
            fragment:'super'
        }
    },
];

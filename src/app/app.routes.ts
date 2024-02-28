import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SmartphoneComponent } from './pages/smartphone/smartphone.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    { path : '', component: HomeComponent},
    { path : 'smartphone', component: SmartphoneComponent},
    { path : 'checkout', component: CheckoutComponent},
];

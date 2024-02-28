import { Component} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbUserModule, NbSearchModule, NbIconModule, NbMenuItem, NbCardComponent, NbCardBackComponent, NbCardModule, NbMenuModule, NbInputModule, NbFormFieldComponent, NbToggleModule} from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NbLayoutModule, 
    NbButtonModule,
    NbSidebarModule,
    NbUserModule,
    NbEvaIconsModule,
    NbSearchModule,
    NbIconModule,
    NbCardModule,
    NbMenuModule,
    NbInputModule,
    NbToggleModule,
    // BrowserAnimationsModule,
    // // FormsModule,
    // // BrowserModule,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  toggleNgModel = true;
  toggleFormControl = new FormControl();
  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      children: [
        {
          title: 'Change Password',
        },
        {
          title: 'Privacy Policy',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'Shopping Bag',
      children: [
        {
          title: 'First Product',
        },
        {
          title: 'Second Product',
        },
        {
          title: 'Third Product',
        },
      ],
    },
    {
      title: 'Orders',
      children: [
        {
          title: 'First Order',
        },
        {
          title: 'Second Order',
        },
        {
          title: 'Third Order',
        },
      ],
    },
  ];
}

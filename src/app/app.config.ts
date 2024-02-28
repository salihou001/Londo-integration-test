import { ApplicationConfig, Provider} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NbMenuModule, NbSidebarModule, NbThemeModule, NbUserComponent } from '@nebular/theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    NbThemeModule.forRoot().providers as Provider[],
    NbSidebarModule.forRoot().providers as Provider[],
    NbSidebarModule.forRoot().providers as Provider[],
    NbMenuModule.forRoot().providers as Provider[],
  ],
};

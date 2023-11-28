import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeCoonfig from './app/routes';

bootstrapApplication(AppComponent ,{
  providers: [provideRouter(routeCoonfig)]
}).catch(err => console.error(err));

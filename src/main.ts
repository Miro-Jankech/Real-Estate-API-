import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { appConfig } from './app.component.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

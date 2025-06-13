import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// the starting potint of the Angular app
bootstrapApplication(AppComponent).catch((err) => console.error(err));

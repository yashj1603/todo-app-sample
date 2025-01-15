import { bootstrapApplication } from '@angular/platform-browser';
import { API_CONFIG } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  // Ensure HTTP client is available
    { provide: 'API_CONFIG', useValue: API_CONFIG }  // Provide the configuration
  ]
})
.catch(err => console.error(err));

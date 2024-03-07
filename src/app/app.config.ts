import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { appInterceptor } from './interceptors/app.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([appInterceptor])), provideAnimationsAsync(),
    //{ provide: HTTP_INTERCEPTORS, useClass: appInterceptor, multi: true },
  ]
};

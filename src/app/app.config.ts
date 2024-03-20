import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // provideHttpClientを追加することでStandaloneのComponent（@NgModuleを使用しない）でhttp通信できる
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient()]
};

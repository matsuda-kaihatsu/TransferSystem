import { HttpClientModule } from "@angular/common/http";
import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// AppComponentを指定することでスタンドアロンコンポーネントとして起動できる
// AppModuleを指定することですべてのコンポーネントからAppModuleでまとめたModuleを使用できる（NgModule機能）
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule), provideAnimationsAsync()],
}).catch((err) => console.error(err));
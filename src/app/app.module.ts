import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BaseLayoutComponent} from './base-layout/base-layout.component';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {
}

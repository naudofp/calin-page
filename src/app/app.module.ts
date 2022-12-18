import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { NavbarItemComponent } from './components/navbar-home/navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarHomeComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

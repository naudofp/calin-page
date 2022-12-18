import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { NavbarItemComponent } from './components/navbar-home/navbar-item/navbar-item.component';
import { ViewSloganComponent } from './components/home-page/view-slogan/view-slogan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarHomeComponent,
    NavbarItemComponent,
    ViewSloganComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

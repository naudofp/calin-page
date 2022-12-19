import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { NavbarItemComponent } from './components/navbar-home/navbar-item/navbar-item.component';
import { ViewSloganComponent } from './components/home-page/view-slogan/view-slogan.component';
import { ViewBenefitsComponent } from './components/home-page/view-benefits/view-benefits.component';
import { BenefitsCardComponent } from './components/home-page/view-benefits/benefits-card/benefits-card.component';
import { ViewInformationsComponent } from './components/home-page/view-informations/view-informations.component';
import { PaymetComponent } from './components/home-page/view-informations/paymet/paymet.component';
import { StepsComponent } from './components/home-page/view-informations/steps/steps.component';
import { CardStepComponent } from './components/home-page/view-informations/steps/card-step/card-step.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarHomeComponent,
    NavbarItemComponent,
    ViewSloganComponent,
    ViewBenefitsComponent,
    BenefitsCardComponent,
    ViewInformationsComponent,
    PaymetComponent,
    StepsComponent,
    CardStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

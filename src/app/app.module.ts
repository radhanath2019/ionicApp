import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { AlertController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent,LoginComponent,DashboardComponent,CustomerComponent,AddcustomerComponent,ListcustomerComponent,AboutComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

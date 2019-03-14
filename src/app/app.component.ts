import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'exit'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'pricetag'
    },
    {
      title: 'Customer',
      url: '/customer',
      icon: 'pie'
    },
    {
      title: 'Listcustomer',
      url: '/listcustomer',
      icon: 'logo-snapchat'
    },
    {
      title: 'Addcustomer',
      url: '/addcustomer',
      icon: 'add-circle'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'logo-windows'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

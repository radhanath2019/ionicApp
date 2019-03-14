import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
username:string="";
password:string="";
  constructor(private router:Router,public alertController: AlertController) {}

  ngOnInit() {}
   onLogin(){
     if(this.username==this.password){
       this.router.navigate(['/dashboard'])
     }
else{
     this.presentAlert();
   }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'email/password is not correct',
      buttons: ['OK']
    });

    await alert.present();
  }
}

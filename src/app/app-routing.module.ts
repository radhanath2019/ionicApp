import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {CustomerComponent} from './customer/customer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';
import {ListcustomerComponent} from './listcustomer/listcustomer.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'about', component:AboutComponent },
  { path: 'customer', component:CustomerComponent },
  { path: 'addcustomer', component:AddcustomerComponent },
  { path: 'listcustomer', component: ListcustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

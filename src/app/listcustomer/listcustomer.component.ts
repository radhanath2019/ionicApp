import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.scss'],
})
export class ListcustomerComponent implements OnInit {
   
  constructor(private CustomerService:CustomerService) { }
  list =[];
  ngOnInit() {
    this.list = this.CustomerService.getCustomers();
  }
}
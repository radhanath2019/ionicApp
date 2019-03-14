import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  customers=[
    {id:1,name:'radha',email:'radha@gmail.com',phone:988,address:'india'},
    {id:2,name:'radha2',email:'radha2@gmail.com',phone:988,address:'bang'},
      ];
      getCustomers(){
        return this.customers;
      }
  constructor() { }
  
}

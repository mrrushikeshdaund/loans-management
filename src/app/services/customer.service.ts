import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environments.dev';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  // Methods to communicate with our backend API
  getAllCustomers() {
    let url =
      environments.CUSTOMER_BASE_URL + environments.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }

  viewCustomer(id: string) {}

  editCustomer(id: string, customerObj: any) {}

  deleteCustomer(id: string) {}

  serachCustomer(key: string) {}
}

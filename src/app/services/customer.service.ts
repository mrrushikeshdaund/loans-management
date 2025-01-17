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

  viewCustomer(id: string) {
    let url =
      environments.CUSTOMER_BASE_URL +
      environments.CUSTOMER.GET_CUSTOMER +
      '?userId=' +
      id;
    return this.httpClient.get(url);
  }

  editCustomer(customerObj: any) {
    let url =
      environments.CUSTOMER_BASE_URL + environments.CUSTOMER.PUT_CUSTOMER;
    return this.httpClient.put(url, customerObj);
  }

  addCustomer(customerObj: any) {
    let url =
      environments.CUSTOMER_BASE_URL + environments.CUSTOMER.POST_CUSTOMER;
    return this.httpClient.post(url, customerObj);
  }

  deleteCustomer(id: string) {
    let url =
      environments.CUSTOMER_BASE_URL +
      environments.CUSTOMER.DELETE_CUSTOMER +
      '?userId=' +
      id;
    return this.httpClient.delete(url);
  }

  serachCustomer(key: string) {}
}

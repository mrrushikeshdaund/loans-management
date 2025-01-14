import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent implements OnInit {
  customerList: any;
  customerResults: any;
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList() {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customerResults = data;
      this.customerList = this.customerResults.data;
      console.log('get customers data :- ', this.customerList);
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent implements OnInit, OnDestroy {
  customerList: any;
  customerResults: any;
  selectedCustomerId = '';
  customerDetails: any;
  customerDetailsResults: any;
  private destroy$ = new Subject<void>();
  constructor(private customerService: CustomerService) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList() {
    this.customerService
      .getAllCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.customerResults = data;
        this.customerList = this.customerResults.data;
        console.log('get customers data :- ', this.customerList);
      });
  }

  viewCustomer() {
    this.customerService
      .viewCustomer(this.selectedCustomerId)
      .pipe(takeUntil(this.destroy$)) // Corrected "destroy$" spelling
      .subscribe((data) => {
        this.customerDetailsResults = data;
        this.customerDetails = this.customerDetailsResults.data;
        console.log(this.customerDetails); // Log after the data is received
      });
  }

  handlePopUp(id: string) {
    this.selectedCustomerId = id;
    this.viewCustomer();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Subject, take, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import createFilter from 'create-filter';

@Component({
  selector: 'app-customers',
  imports: [FormsModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent implements OnInit, OnDestroy {
  customerList: any;
  customerResults: any;
  selectedCustomerId = '';
  customerDetails: any;
  customerDetailsResults: any;
  filteredCustomerList: any;
  private destroy$ = new Subject<void>();
  constructor(private customerService: CustomerService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getCustomerList();
    this.filteredCustomerList = [...this.customerList];
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
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.customerDetailsResults = data;
        this.customerDetails = this.customerDetailsResults.data;
        console.log(this.customerDetails);
      });
  }

  updateCustomerDetails() {
    this.customerService
      .editCustomer(this.customerDetails)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  createNewCustomer() {
    this.customerService
      .addCustomer(this.customerDetails)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCustomer() {
    this.customerService
      .deleteCustomer(this.selectedCustomerId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  handlePopUp(id: string) {
    this.selectedCustomerId = id;
    this.viewCustomer();
  }

  handleSaveAction() {
    this.updateCustomerDetails();
    this.getCustomerList();
  }

  handleAddCustomerAction() {
    this.customerDetails = {};
    this.selectedCustomerId = '';
  }

  handleCreateAction() {
    this.createNewCustomer();
    this.getCustomerList();
  }

  handleDeleteAction() {
    this.deleteCustomer();
    this.getCustomerList();
  }

  handleSearchFilter(event: any) {
    const userInput = event.target.value.toLowerCase();
    this.customerList = this.customerList.filter((customer: any) => {
      return (
        customer.firstName.toLowerCase().includes(userInput) ||
        customer.lastName.toLowerCase().includes(userInput)
      );
    });
  }
}

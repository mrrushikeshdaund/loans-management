import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent implements OnInit {
  async ngOnInit() {
    const customersData = await getCustomersData();
    console.log('getCustomersData', customersData);
  }
}
function getCustomersData() {
  return fetch('http://localhost:3000/customers/list');
}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environments.dev';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private httpClient: HttpClient) {}

  getAllLoan() {
    let url = environments.LOANS_BASE_URL + environments.LOANS.GET_ALL_LOANS;
    return this.httpClient.get(url);
  }
}

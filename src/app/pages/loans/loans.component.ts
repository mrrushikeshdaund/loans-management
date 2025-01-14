import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-loans',
  imports: [],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss',
})
export class LoansComponent implements OnInit {
  loanList: any;
  loanResult: any;
  constructor(private LoanService: LoanService) {}
  ngOnInit(): void {
    this.getAllLoansRecords();
  }

  getAllLoansRecords() {
    this.LoanService.getAllLoan().subscribe((data) => {
      this.loanResult = data;
      this.loanList = this.loanResult.data;
      console.log('The Loan Data :', this.loanList);
    });
  }
}

import { Routes } from '@angular/router';
import { DashboradComponent } from './pages/dashborad/dashborad.component';
import { LoansComponent } from './pages/loans/loans.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LoansPlansComponent } from './pages/loans-plans/loans-plans.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: 'dashborad', component: DashboradComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'plan loans', component: LoansPlansComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
];

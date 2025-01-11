import { Component, Input, OnInit } from '@angular/core';
import { MainContentComponent } from "../main-content/main-content.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MainContentComponent, FooterComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  menulist: string[] = [
    'Dashborad',
    'Loans',
    'Customers',
    'Payments',
    'Invoices',
    'Plan Loans',
    'Reports',
    'Settings',
  ];

  googleIconMap: { [key: string]: string } = {
    Dashboard: 'dashboard',
    Loans: 'account_balance',
    Customers: 'groups',
    Payments: 'payment',
    Invoices: 'description',
    'Plan Loans': 'build',
    Reports: 'analytics',
    Settings: 'settings',
  };

  activeItem: string = 'Dashboard';

  constructor(private router: Router) {}
  ngOnInit(): void {}

  handleItem(item: string) {
    this.activeItem = item;
    this.router.navigate([item.toLocaleLowerCase()]);
  }

  isActive(item: string): boolean {
    return this.activeItem === item;
  }

  getIcon(item: string): string {
    return this.googleIconMap[item] || 'dashboard';
  }
}

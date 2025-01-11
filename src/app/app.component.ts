import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';
  sideBarVisible:any|null = null

  handleMenuToggle(event:any){
    this.sideBarVisible = event
    console.log("applicaytion ",event);
  }
}

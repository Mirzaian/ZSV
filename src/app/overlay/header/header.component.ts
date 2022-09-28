import { Component, Input, OnInit } from '@angular/core';
import { navigationItems } from 'src/app/services/nav-items';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  navItems = navigationItems;

  constructor() {
    console.log(this.navItems = navigationItems);
   }

  ngOnInit(): void {
  }

}

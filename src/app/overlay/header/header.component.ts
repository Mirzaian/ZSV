import { Component, Input, OnInit } from '@angular/core';
import { navigationItems } from 'src/app/services/nav-items';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  navItems = navigationItems;

  constructor(private userService: UserService) {
    console.log(this.navItems = navigationItems);
   }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

}

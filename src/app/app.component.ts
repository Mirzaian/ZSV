import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zsv';
  isLoggedIn: boolean = false;

  constructor(public userService: UserService, private router: Router) {
    userService.isLoggedIn$.subscribe((loginStatus) => this.isLoggedIn = loginStatus);
    console.log(this.isLoggedIn);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['anmelden']);
  }
}

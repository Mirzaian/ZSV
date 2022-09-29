import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor( private router: Router, private userService: UserService, private ngZone: NgZone) {}

  ngOnInit(): void {}

  login() {
    if (this.username == "root" && this.password == "123456") {
      this.userService.isLoggedIn$.next(true);
      localStorage.setItem('loginStatus', 'true');
      this.userService.isLoggedIn();
      this.ngZone.run(() => { this.router.navigate(['/startseite']) });
    }
  }

}

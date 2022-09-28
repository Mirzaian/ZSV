import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isLoggedIn$.next(localStorage.getItem('loginStatus') == 'true')
  }

  isLoggedIn(): boolean {
    const status = (localStorage.getItem('loginStatus') == 'true')
    return status;
  }

  logout() {
    this.isLoggedIn$.next(false)
    localStorage.removeItem('loginStatus')
    this.router.navigate([''])
  }
}

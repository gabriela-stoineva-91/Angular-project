import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isSingIn(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
  

  singIn(): void {
    // this.user = {
    // };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }
  singUp(): void {
    //  this.user = {
    // };
  
   localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }


  singOut(): void {
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);
  }
}


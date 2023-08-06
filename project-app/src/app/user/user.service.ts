import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  userUrl: string = `${environment.apiUrl}/users`;

  get isSingIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {}

  singUp(
    username: string,
    email: string,
    password: string,
    repeatPassword: string
  ) {
    return this.http.post<User>(`${this.userUrl}.json`, {
        username,
        email,
        password,
        repeatPassword,
      })
      
  }
  singIn(username: string, password: string) {
    this.user = {username, password}
    localStorage.setItem(this.USER_KEY, JSON.stringify({username, password}));
  }
  singOut(): void {
    localStorage.removeItem(this.USER_KEY);
    this.user = undefined;
  }
}

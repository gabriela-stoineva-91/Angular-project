import { Injectable, OnDestroy } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  //auth = getAuth();
  user: User | undefined;
  USER_KEY = '[user]';
  userUrl: string = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  get isSingIn(): boolean {
    return !!this.user;
  }
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
    });
  }

  singIn(username: string, password: string) {
    this.user = { username, password };
    localStorage.setItem(this.USER_KEY, JSON.stringify({ username, password }));
  }
  singOut(): void {
    localStorage.removeItem(this.USER_KEY);
    this.user = undefined;
  }
}

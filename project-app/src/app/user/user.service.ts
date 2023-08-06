import { Injectable, OnDestroy } from '@angular/core';
import {  } from "@angular/fire/auth";
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../types/user';
import { environment } from 'src/environments/environment.development';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root',
})
export class UserService  {
    userData: Observable<firebase.User>;
    
    constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    }
    
    // /* Sign up */
    // SignUp(email: string, password: string) {
    // this.angularFireAuth
    // .auth
    // .createUserWithEmailAndPassword(email, password)
    // .then(res => {
    // console.log('You are Successfully signed up!', res);
    // })
    // .catch(error => {
    // console.log('Something is wrong:', error.message);
    // });
    // }
    
    // /* Sign in */
    // SignIn(email: string, password: string) {
    // this.angularFireAuth
    // .auth
    // .signInWithEmailAndPassword(email, password)
    // .then(res => {
    // console.log('You're in!');
    // })
    // .catch(err => {
    // console.log('Something went wrong:',err.message);
    // });
    // }
    
    // /* Sign out */
    // SignOut() {
    // this.angularFireAuth
    // .auth
    // .signOut();
    // }
    
  user: User | undefined;
  USER_KEY = '[user]';

  userUrl: string = `${environment.apiUrl}/users`;

  get isSingIn(): boolean {
    return !!this.user;
  }

 // constructor(private http: HttpClient) {}

  // singUp(
  //   username: string,
  //   email: string,
  //   password: string,
  //   repeatPassword: string
  // ) {
  //   return this.http.post<User>(`${this.userUrl}.json`, {
  //       username,
  //       email,
  //       password,
  //       repeatPassword,
  //     })
      
  // }
  // singIn(username: string, password: string) {
  //   this.user = {username, password}
  //   localStorage.setItem(this.USER_KEY, JSON.stringify({username, password}));
  // }
  // singOut(): void {
  //   localStorage.removeItem(this.USER_KEY);
  //   this.user = undefined;
  // }
}


​

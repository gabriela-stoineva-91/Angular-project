import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData = new Observable();
  userId: string | undefined;
  USER_KEY = 'user';
  token: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userId = '';
  }
  signUpService(email: string, password: string): any {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        alert('You successfully sing up in FoodIdeas!');
        this.router.navigate(['/sing-in']);
        //this.userId = res.user?.uid;
      })
      .catch((error: any) => {
        alert(error.message);
      });
  }
  signInService(email: string, password: string): void {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.token = res.user?.refreshToken;
        this.userId = res.user?.uid;
        const obj = {
          token: this.token,
          userId: this.userId,
        };
        localStorage.setItem(this.USER_KEY, JSON.stringify(obj));
        alert('You are Successfully logged in!');
        this.router.navigate(['/welcome']);
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/sing-in'])
      });
  }
  signOutService(): void {
    this.angularFireAuth.signOut();
    localStorage.removeItem(this.USER_KEY);
  }
}

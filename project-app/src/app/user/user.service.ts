import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData = new Observable();

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }
  signUpService(email: string, password: string): any {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        alert('You successfully sing up in FoodIdeas!');
        this.router.navigate(['/welcome']);
      })
      .catch((error: any) => {
        alert(error.message);
      });
  }
  signInService(email: string, password: string): void {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('You are Successfully logged in!');
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }
  signOutService(): void {
    this.angularFireAuth.signOut();
  }
}

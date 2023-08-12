import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private userService: UserService, private router: Router) {}

  singUpHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;

    this.userService.signUpService(email, password);
  }
}

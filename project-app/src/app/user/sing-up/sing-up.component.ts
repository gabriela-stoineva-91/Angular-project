import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent {
  // form = this.fb.group({
  //   username: ['', [Validators.required, Validators.minLength(5)]],
  //   email: [
  //     '',
  //     [Validators.required, appEmailValidator()],
  //   ],
  //   tel: [''],
  //   passGroup: this.fb.group(
  //     {
  //       password: ['', [Validators.required, Validators.minLength(5)]],
  //       rePassword: ['', [Validators.required]],
  //     },
  //     {
  //       validators: [matchPasswordsValidator('password', 'rePassword')],
  //     }
  //   ),
  // });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  singUpHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { username, email, password, repeatPassword } = form.value;
    
    this.userService
      .singUp(username!, email!, password!, repeatPassword!)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/welcome']);
      });
  }
}

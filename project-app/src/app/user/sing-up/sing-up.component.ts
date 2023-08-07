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

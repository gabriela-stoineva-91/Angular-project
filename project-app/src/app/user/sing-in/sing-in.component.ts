import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  constructor(private userService: UserService, private router: Router) {}

  singInHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { username, password } = form.value;
    this.userService.singIn(username, password);
    this.router.navigate(['/welcome']);
  }
}

import { Component, OnChanges, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userService: UserService) {}
  
  singOutHandler(): void {
    this.userService.signOutService();
  }
  get isLogged(): boolean {
    return (localStorage.getItem('user') !== null);
  }

}

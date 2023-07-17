import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account/account.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    AccountComponent,
    SingInComponent,
    SingUpComponent,
  
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {
    path: 'sing-in',
    component: SingInComponent,
    //redirectTo: 'sing-up',
  },
  {
    path: 'sing-up',
    component: SingUpComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

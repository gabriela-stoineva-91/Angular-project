import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  {
    path: 'sing-in',
    component: SingInComponent,
  },
  {
    path: 'sing-up',
    component: SingUpComponent,
  },
  {
    path: 'welcome',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

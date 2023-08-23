import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
 import { UsersComponent } from './components/users/users.component';
 import { LogInComponent } from './components/log-in/log-in.component';
 import { SignUpComponent } from './components/sign-up/sign-up.component';

 
const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'login',
    component:LogInComponent,
  },
  {
    path: 'signup',
    component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

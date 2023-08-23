import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/update/edit-user/edit-user.component'

<<<<<<< HEAD
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
=======
const routes: Routes = [
  {path: 'user', component: UsersComponent},
  {path: 'edit/:id', component: EditUserComponent},
>>>>>>> c027e976a2aad437607bce45b32812ef00d9f0a0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

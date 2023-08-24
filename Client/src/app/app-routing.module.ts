import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
//import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';

import { SignUpComponent } from './auth/signup/signup.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { SigninComponent } from './auth/signin/signin.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forum', component: ForumComponent },
  //{ path: 'auth', component: AuthComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/edit/:id', component: UsersEditComponent },
  { path: 'forum/admin', component: ForumAdminComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'user', component: UsersComponent },
  { path: 'edit', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

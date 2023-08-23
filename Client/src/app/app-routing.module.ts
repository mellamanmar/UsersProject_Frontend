import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './auth/signup/signup.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { SigninComponent } from './auth/signin/signin.component'

const routes: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'user', component: UsersComponent},
  {path: 'edit', component: EditUserComponent},
  {path: 'signin', component: SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

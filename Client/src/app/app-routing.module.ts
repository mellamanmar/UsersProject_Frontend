import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/update/edit-user/edit-user.component';
import { SignupComponent } from './auth/signup/signup.component'

const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'user', component: UsersComponent},
  // {path: 'edit/:id', component: EditUserComponent},
  {},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
// import { EditUserComponent } from './users/update/edit-user/edit-user.component';
// import { SignupComponent } from './auth/signup/signup.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'

const routes: Routes = [
  {path: 'user', component: UsersComponent},
  {path: 'edit', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

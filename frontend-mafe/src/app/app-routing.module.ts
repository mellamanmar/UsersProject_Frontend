import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { TasksComponent } from './components/tasks/tasks.component'; 
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { AuthGuard } from './auth.guard';
import { EditComponent } from './components/edit/edit.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'foro',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/user/:id',
    component: EdituserComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

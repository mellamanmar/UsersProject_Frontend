import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: ForumComponent },
  { path: 'create-post', component: ForumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
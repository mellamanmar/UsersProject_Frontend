import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForumComponent } from './forum/forum.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import {EdituserComponent } from './users/edit-user/edituser/edituser.component'
import { SignUpComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component'
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { DeletePostComponent } from './posts/delete-post/delete-post.component';
import { DeleteComponent } from './users/edit-user/delete/delete.component'

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch:'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forum/posts', component: PostListComponent },
  { path: 'forum/posts/:id', component: PostDetailComponent },
  { path: 'forum/create', component: CreatePostComponent },
  { path: 'forum/edit/:id', component: EditPostComponent },
  { path: 'forum/delete/:id', component: DeletePostComponent },
  { path: 'user', component: UsersComponent },
  { path: 'userdetail', component: DeleteComponent},
  { path: 'edituser', component: EdituserComponent},
  { path: 'forum', component: ForumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

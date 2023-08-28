import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SignUpComponent } from './auth/signup/signup.component'
import { SigninComponent } from './auth/signin/signin.component'
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { DeletePostComponent } from './posts/delete-post/delete-post.component';
import { AuthGuard } from './auth.guard';
import { EditComponent } from './users/user-edit/edit/edit.component';
import { EditUserComponent } from './users/user-edit/edit-user/edit-user.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch:'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'forum/posts', component: ForumComponent },
  // { path: 'forum/posts/:id', component: PostDetailComponent },
  // { path: 'forum/create', component: CreatePostComponent },
  // { path: 'forum/edit/:id', component: EditPostComponent },
  // { path: 'forum/delete/:id', component: DeletePostComponent },
  { path: 'user', component: UsersComponent },
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'edit/user/:id', component: EditUserComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

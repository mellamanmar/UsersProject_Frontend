import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ForumComponent } from './forum/forum.component';
//import { EditPostComponent } from './forum/edit-post/edit-post.component'; // Ajusta la ruta a la ubicación real de tu componente
import { UsersComponent } from './users/users.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';

import { SignUpComponent } from './auth/signup/signup.component'
import { EditUserComponent } from './components/edit-user/edit-user.component'
import { SigninComponent } from './auth/signin/signin.component'
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { DeletePostComponent } from './posts/delete-post/delete-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SigninComponent },

  { path: 'forum/posts', component: PostListComponent },
  { path: 'forum/posts/:id', component: PostDetailComponent },
  { path: 'forum/create', component: CreatePostComponent },
  { path: 'forum/edit/:id', component: EditPostComponent },
  { path: 'forum/delete/:id', component: DeletePostComponent },
  { path: 'users/edit/:id', component: UsersEditComponent },
  { path: 'user', component: UsersComponent },
  { path: 'edit', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

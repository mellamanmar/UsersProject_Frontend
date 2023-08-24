import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './general/app.component';
import { EditUserComponent } from './users/update/edit-user/edit-user.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component'
import { UsersComponent } from './users/users.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';
import { PostsComponent } from './forum/posts/posts.component';
import { CreatePostComponent } from './forum/create-post/create-post.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { DeletePostComponent } from './posts/delete-post/delete-post.component';

@NgModule({
  declarations: [
AppComponent,
EditUserComponent,
SigninComponent,
SignUpComponent,
UsersComponent,
ForumComponent,
HomeComponent,
UsersEditComponent,
ForumAdminComponent,
PostsComponent,
CreatePostComponent,
PostListComponent,
PostDetailComponent,
EditPostComponent,
DeletePostComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './general/app.component';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './users/edit-user/edituser/edituser.component';
import { DeleteComponent } from './users/edit-user/delete/delete.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { DeletePostComponent } from './posts/delete-post/delete-post.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EdituserComponent,
    DeleteComponent,
    ForumComponent,
    HomeComponent,
    SigninComponent,
    SignUpComponent,
    PostListComponent,
    PostDetailComponent,
    EditPostComponent,
    DeletePostComponent,
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

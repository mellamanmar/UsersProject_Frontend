import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './users/update/edit-user/edit-user.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ForumComponent,
    SigninComponent,
    SignupComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AuthComponent } from './auth/auth.component';
=======
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
>>>>>>> 8d736ad79ef16b11dd0c3ae3c3d8cd2ce4f77a37
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
=======
import { EditUserComponent } from './users/update/edit-user/edit-user.component';
<<<<<<< HEAD
>>>>>>> c027e976a2aad437607bce45b32812ef00d9f0a0
=======
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component'
>>>>>>> 8d736ad79ef16b11dd0c3ae3c3d8cd2ce4f77a37

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ForumComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    LogInComponent,
    SignUpComponent,
=======
=======
    SigninComponent,
    SignupComponent,
>>>>>>> 8d736ad79ef16b11dd0c3ae3c3d8cd2ce4f77a37
    EditUserComponent
>>>>>>> c027e976a2aad437607bce45b32812ef00d9f0a0
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

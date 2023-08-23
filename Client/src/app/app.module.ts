import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AuthComponent } from './auth/auth.component';
import { ForumComponent } from './forum/forum.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
=======
import { EditUserComponent } from './users/update/edit-user/edit-user.component';
>>>>>>> c027e976a2aad437607bce45b32812ef00d9f0a0

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AuthComponent,
    ForumComponent,
<<<<<<< HEAD
    LogInComponent,
    SignUpComponent,
=======
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AuthComponent } from './auth/auth.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';

// Definir rutas
const routes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AuthComponent,
    ForumComponent,
    LoginComponent,
    HomeComponent,
    UsersEditComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

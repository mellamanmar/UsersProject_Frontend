import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 5ad27a36afd482cfab0b9aeeb170517074f26af1

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './general/app.component';
import { UsersComponent } from './users/users.component';
import { ForumComponent } from './forum/forum.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { FormsModule } from '@angular/forms';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';

// Definir rutas
const routes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/edit/:id', component: UsersEditComponent }, // Ruta para editar usuarios
  { path: 'forum/admin', component: ForumAdminComponent } // Ruta para administrar el foro (por ejemplo, para administradores)
];
=======
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './users/update/edit-user/edit-user.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component'
>>>>>>> 5ad27a36afd482cfab0b9aeeb170517074f26af1

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
<<<<<<< HEAD
    AuthComponent,
    ForumComponent,
    LoginComponent,
    HomeComponent,
    UsersEditComponent,
    ForumAdminComponent
=======
    ForumComponent,
    SigninComponent,
    SignUpComponent,
    EditUserComponent
>>>>>>> 5ad27a36afd482cfab0b9aeeb170517074f26af1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes),
    FormsModule,
=======
    FormsModule
>>>>>>> 5ad27a36afd482cfab0b9aeeb170517074f26af1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

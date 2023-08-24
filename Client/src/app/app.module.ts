import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EditUserComponent } from './users/update/edit-user/edit-user.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignUpComponent } from './auth/signup/signup.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './general/app.component';
import { UsersComponent } from './users/users.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';

// Definir rutas
const routes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/edit/:id', component: UsersEditComponent }, // Ruta para editar usuarios
  { path: 'forum/admin', component: ForumAdminComponent } // Ruta para administrar el foro (por ejemplo, para administradores)
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ForumComponent,
    LoginComponent,
    HomeComponent,
    UsersEditComponent,
    ForumAdminComponent,
    SigninComponent,
    SignUpComponent,
    EditUserComponent
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

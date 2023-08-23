import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UsersComponent } from './users/users.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumFormComponent } from './forum-form/forum-form.component';
import { Routes,RouterModule } from '@angular/router';
import { RegisterComponent } from './users/register/register.component'

const routes:Routes=[ 
  {path:'', redirectTo:'/register',pathMatch:'full'  }, 
  {path:'register',component:RegisterComponent}, 
  {path:'register/user',component:UsersComponent}, 
  {path:'register/user/:id',component:RegisterComponent}, 
 
]

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UsersComponent,
    ForumListComponent,
    ForumFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UsersComponent } from './users/users.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumFormComponent } from './forum-form/forum-form.component';
import { Routes,RouterModule } from '@angular/router';
import { FormUserComponent } from './users/form-user.component';

const routes:Routes=[
  {path:'', redirectTo:'/users',pathMatch:'full'  },
  {path:'users',component:UsersComponent},
  {path:'users/form',component:FormUserComponent},
  {path:'users/form/:id',component:FormUserComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UsersComponent,
    ForumListComponent,
    ForumFormComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

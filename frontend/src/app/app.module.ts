import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UsersComponent } from './users/users.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumFormComponent } from './forum-form/forum-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UsersComponent,
    ForumListComponent,
    ForumFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

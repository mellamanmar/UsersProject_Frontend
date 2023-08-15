import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumListComponent } from './forum-list/forum-list.component';
import { ForumFormComponent } from './forum-form/forum-form.component';

const routes: Routes = [
  { path: 'forum', component: ForumListComponent },
  { path: 'create-post', component: ForumFormComponent },
  { path: '', redirectTo: '/forum', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

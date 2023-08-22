import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { UsersComponent } from './users/users.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'foro', component: ForumComponent },
  { path: 'foro/:page', component: ForumComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);

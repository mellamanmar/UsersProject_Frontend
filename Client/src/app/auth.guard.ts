import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, 
              private router: Router) { }
  canActivate(): boolean{
    if(this.authService.loggedIn()){
      return true;
    }
    this.router.navigate(['/signin']);
    return false;
  }

}
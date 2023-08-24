import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{

  user = {
    _id: '',
    email: '',
    username: '',
    password: '',
    userType: ''
    }

  constructor(
    private authService : AuthService,
    private router: Router){ }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.singInUser(this.user)
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token',res.token);
            this.router.navigate(['user']);
          }
        )
  }


}

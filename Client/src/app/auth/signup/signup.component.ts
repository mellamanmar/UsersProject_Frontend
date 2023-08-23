import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { User } from '../../users/User'
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit{

  newUser = {
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

  // signUp() {
  //   console.log(this.newUser)
  // }

  signUp(){
    this.authService.signUpUser(this.newUser)
      .pipe(
        tap (res => console.log(res))
    ).subscribe()
  }
}

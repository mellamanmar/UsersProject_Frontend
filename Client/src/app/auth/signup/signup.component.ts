import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
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
  // }  Función de prueba de conexión

  signUp(){
    this.authService.signUpUser(this.newUser)
      .pipe(
        tap (res =>{
          console.log(res)

        })
    ).subscribe(res => localStorage.setItem('token', res.token))
  }
}

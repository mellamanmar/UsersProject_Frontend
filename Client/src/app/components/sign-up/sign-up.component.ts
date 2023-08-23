import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
 
  user = { }

  constructor(
    private authService : AuthService,
    private router: Router){ }

  ngOnInit() { 
}

  signUp(){
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token',res.token);
          this.router.navigate(['/logedin']);
        }
      )
  }
}

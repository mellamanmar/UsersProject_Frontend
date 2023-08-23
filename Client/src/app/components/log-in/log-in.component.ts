import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = { }

  constructor(
  private authService : AuthService,
  private router: Router) { }

  ngOnInit(): void {}

  logIn() {
    this.authService.logInUser(this.user)
        .subscribe(
          res => {
            console.log(res);
            localStorage.setItem('token',res.token);
            this.router.navigate(['/loggedin']);
          }
        )
  }
}

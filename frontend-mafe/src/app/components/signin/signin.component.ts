import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user = {
    email:'',
    username:'',
    password:'',
    userType:''
  }

  constructor(private authService: AuthService,
    private router: Router){
    }
  ngOnInit(){

  }

  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/edit']);
      },
      err => console.log(err)
    )

  }

}

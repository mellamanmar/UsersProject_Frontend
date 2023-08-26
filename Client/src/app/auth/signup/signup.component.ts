import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignUpComponent {

  formulario: FormGroup;
  authService = inject (AuthService)

  // newUser = {
  // _id: '',
  // email: '',
  // username: '',
  // password: '',
  // userType: ''
  // }

  constructor(
    private router: Router){ this.formulario = new FormGroup ({
      _id: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      userType: new FormControl(),
    })}

  //   ngOnInit(): void {
  // }

  async signUp() {
    const response= await this.authService.signUpUser(this.formulario.value);
    console.log(response)
  }

  // signUp(){
  //   this.authService.signUpUser(this.newUser)
  //     .pipe(
  //       tap (res =>{
  //         console.log(res)
  //       })
  //   ).subscribe(res => {localStorage.setItem('token', res.token)
  //       this.router.navigate(['signin'])})
  // }
}

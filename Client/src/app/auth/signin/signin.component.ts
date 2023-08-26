import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  formulario: FormGroup;
  authService = inject (AuthService)

  // user = {
  //   _id: '',
  //   email: '',
  //   username: '',
  //   password: '',
  //   userType: ''
  //   }

  constructor(
    private router: Router){
      this.formulario = new FormGroup ({
      _id: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      userType: new FormControl(),
    }) }

  // ngOnInit(): void {
  // }

  // signIn() {
  //   this.authService.singInUser(this.user)
  //       .subscribe(
  //         res => {
  //           console.log(res);
  //           localStorage.setItem('token',res.token);
  //           this.router.navigate(['user']);
  //         }
  //       )
  // }

  async signIn() {
    const response= await this.authService.singInUser(this.formulario.value);
    if (!response.error){
    localStorage.setItem ('token', response.token)
    this.router.navigate(['user'])
  }}

}

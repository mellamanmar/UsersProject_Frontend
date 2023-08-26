import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router'
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  user = {
    _id: '',
    email: '',
    username: '',
    password: '',
    userType: ''
  }

  users !: any[];

  constructor(private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.authService.getUsers()
      .subscribe(
        res => {
          console.log(res)
          this.users = res;
        },
        err => console.log(err)
      )
  }

  delete(user: any) {
    this.authService.eliminar(user)
      .subscribe(
        res => {
          window.location.reload();
        },
        err => console.log(err)
      )
  }

  edit(user: any) {
    this.authService.redirectEdit(user._id)
  }
}
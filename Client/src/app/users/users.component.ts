import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from './User';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  user:any[]=[];

  constructor(
    private usersService:UserService ) {}

  ngOnInit(): void {
  }

  getUser(){
    this.usersService.getUsers()
    .then( user => { console.log(user)})
    .catch(error => console.error())
  }


}

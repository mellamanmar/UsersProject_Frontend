import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
import { User } from './User';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  user:any[]=[];
  id: User [] = []

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
      this.getUser();
      this.getUserForId();
  }

  getUser(){
    this.usersService.getUsers()
    .pipe(
      tap (res => console.log(res))
    )
    .subscribe()
  }

  getUserForId(_id:User){
    this.usersService.getUserProfile()
    .pipe(
      tap (res => console.log(res))
    )
    .subscribe()
  }
}

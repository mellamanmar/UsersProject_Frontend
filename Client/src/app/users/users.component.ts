import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  user:any[]=[];

  constructor(private usersService:UsersService){}

  ngOnInit(): void {
      this.getUser();
  }

  getUser(){
    this.usersService.getUserProfile()
    .subscribe(user => {this.user = user 
    console.log(this.user)})
  }
}

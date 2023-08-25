import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  titulo:string="Lista De Usuarios";

  users: User[] = [];
  
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAll().subscribe(
      u =>this.users = u
    );
      
  }

  delete(user:User):void{
    console.log("form delete");
    this.userService.delete(user.id).subscribe(
      res=>this.userService.getAll().subscribe(
        response=>this.users=response
      )
    );
  }


}


import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user:User = new User();
  titulo:string="Registro de usuario";

  constructor(private userService:UserService, private router:Router,private activatedRouter:ActivatedRoute){ }

  ngOnInit(): void {
    this.cargar();
      
  }

  cargar():void{
    this.activatedRouter.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.userService.get(id).subscribe(
            es=>this.user=es
          )
        }
      }
    )
  }



  create():void{
    console.log(this.user);
    this.userService.create(this.user).subscribe(
      res=>this.router.navigate(['/users'])
    );
  }

  update():void{
    this.userService.update(this.user).subscribe(
      res=>this.router.navigate(['/users'])

    );

  }

}
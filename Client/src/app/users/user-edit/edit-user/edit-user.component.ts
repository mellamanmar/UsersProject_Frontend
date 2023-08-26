import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

    //users !: any;
  
    user = {
      _id:'',
      email:'',
      username:'',
      password:'',
      userType:''
    }
  
    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    }
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.authService.getUserById(id)
        .subscribe(
          res => {
            console.log(res)
            this.user = res;
          },
          err => console.log(err)
        )
    }
  
    editarUser(){
      const id = this.route.snapshot.paramMap.get('id');
      this.authService.editarUser(this.user, id)
        .subscribe(
          res => {
            console.log(res)
            this.user = res;
            this.router.navigate(['/edit']);
          },
          err => console.log(err)
        )
    }
  }
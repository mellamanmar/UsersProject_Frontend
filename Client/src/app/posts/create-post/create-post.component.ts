import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formulario: FormGroup;
  postService = inject (PostService)

  // postData = {
  //   _id: '',
  //   title: '',
  //   content: '',
  //   username: ''
  // };

  constructor(private router: Router) {
    this.formulario = new FormGroup ({
      _id: new FormControl(),
      title: new FormControl(),
      content: new FormControl(),
      username: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  async createPost () {
    const response = await this.postService.createPost(this.formulario.value)
    console.log(response)
  }

  // createPost() {
  //   this.postService.createPost(this.postData).pipe(
  //     tap (postData =>{
  //       console.log(this.postData)
  //     })
  //   ).subscribe(postData => {
  //     this.postData = postData
  //     this.router.navigate(['forum/posts'])});
  // }
}

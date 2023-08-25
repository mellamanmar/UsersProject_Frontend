import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postData = {
    _id: '',
    title: '',
    content: '',
    username: ''
  };

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
  }

  createPost() {
    this.postService.createPost(this.postData).pipe(
      tap (postData =>{
        console.log(this.postData)
      })
    ).subscribe(postData => {
      this.postData = postData
      this.router.navigate(['signin'])});
  }
}

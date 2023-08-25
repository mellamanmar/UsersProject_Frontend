import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postData: any = {};

  constructor(private postService: PostService) {}

  createPost() {
    this.postService.createPost(this.postData).subscribe(
      response => {
        console.log('Post created successfully', response);
        // Realiza cualquier otra acción después de crear el post
      },
      error => {
        console.error('Error creating post', error);
      }
    );
  }
}

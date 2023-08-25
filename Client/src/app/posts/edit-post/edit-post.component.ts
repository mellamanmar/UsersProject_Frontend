import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post = { _id: '', title: '', content: '' , username: ''}; // Instancia de Post

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(
        post => {
          this.post = post; // Actualiza la instancia del post
        },
        error => {
          console.error('Error fetching post', error);
        }
      );
    }
  }

  updatePost() {
    this.postService.editPost(this.post._id, this.post).subscribe(
      response => {
        console.log('Post updated successfully', response);
        // Realiza cualquier otra acción después de actualizar el post
      },
      error => {
        console.error('Error updating post', error);
      }
    );
  }
}

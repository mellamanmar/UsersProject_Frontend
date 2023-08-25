import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  post: Post = { _id: '', title: '', content: '' , username: ''}; // Instancia de Post

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(
        post => {
          this.post = post;
        },
        error => {
          console.error('Error fetching post', error);
        }
      );
    }
  }

  deletePost() {
    this.postService.deletePost(this.post._id).subscribe(
      response => {
        console.log('Post deleted successfully', response);
        // Realiza cualquier otra acción después de eliminar el post
        this.router.navigate(['/posts']); // Redirige a la lista de posts
      },
      error => {
        console.error('Error deleting post', error);
      }
    );
  }
}

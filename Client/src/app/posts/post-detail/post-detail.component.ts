import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post = { _id: '', title: '', content: '', username: ''}; // Instancia de Post

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPostById(postId).subscribe(
        post => {
          this.post = post; // Asigna el objeto de la publicación a "post"
        },
        error => {
          console.error('Error fetching post', error);
        }
      );
    }
  }
}

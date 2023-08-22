import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ForumService } from './forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [ForumService]
})
export class ForumComponent implements OnInit {
  posts: any[] = [];
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.http.get<any[]>('http://localhost:3000/posts').subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  deletePost(postId: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.http.delete(`http://localhost:3000/delete/${postId}`).subscribe(
        () => {
          console.log('Post deleted successfully');
          this.getPosts(); // Refresh the list after deletion
        },
        (error) => {
          console.error('Error deleting post:', error);
        }
      );
    }
  }
}

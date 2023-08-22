import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts: any[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.forumService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  deletePost(postId: string): void {
    this.forumService.deletePost(postId)
      .subscribe(() => {
        // Actualizar la lista de publicaciones después de eliminar
        this.getPosts();
      });
  }
}

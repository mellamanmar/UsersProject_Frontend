// forum-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {
  posts: any[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePost(postId: number): void {
    this.forumService.deletePost(postId).subscribe(response => {
      // Realizar acciones después de eliminar la publicación, si es necesario
      console.log(response);
      // Por ejemplo, puedes volver a cargar la lista de publicaciones después de eliminar una
      this.getPosts();
    });
  }

  private getPosts(): void {
    this.forumService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}

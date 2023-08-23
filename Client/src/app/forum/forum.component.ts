import { Component, OnInit } from '@angular/core';
import { ForumService } from './forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts: any[] = [];
  postService: any;
  router: any;

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  title: string = '';
  content: string = '';

  createPost(): void {
    const postData = {
      title: this.title,
      content: this.content
    };
  
    this.forumService.createPost(postData)
      .subscribe(() => {
        // Publicación creada exitosamente
        this.getPosts(); //Actualizar lista de publicaciones
        this.title = ''; //Limpiar campos despues de crear publicacior
        this.content = '';
      });
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

// forum-form.component.ts
import { Component } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-form',
  templateUrl: './forum-form.component.html',
  styleUrls: ['./forum-form.component.css']
})
export class ForumFormComponent {
  title: string = '';
  content: string = '';

  constructor(private forumService: ForumService) {}

  createPost(): void {
    const newPost = { title: this.title, content: this.content };
    this.forumService.createPost(newPost).subscribe(response => {
      // Realizar acciones después de crear la publicación, si es necesario
      console.log(response);
      // Limpiar los campos del formulario despues de crear publicacion
      this.title = '';
      this.content = '';
    });
  }
}

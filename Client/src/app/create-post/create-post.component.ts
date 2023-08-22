import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../forum/forum.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  title: string = '';
  content: string = '';

  constructor(private postService: ForumService, private router: Router) { }

  ngOnInit(): void {
  }

  createPost(): void {
    const postData = {
      title: this.title,
      content: this.content
    };
  
    this.postService.createPost(postData)
      .subscribe(() => {
        // Publicación creada exitosamente
        this.router.navigate(['../forum']);
      });
  }
}

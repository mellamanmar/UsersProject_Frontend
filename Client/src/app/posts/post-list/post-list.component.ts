import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../Post';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { ForumService } from '../../forum/forum.service'


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService, private forumService: ForumService) {}

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }



//   postList () {
//     this.postService.getPosts()
//     .pipe(
//     catchError(error => {
//       console.error('Error fetching posts', error);
//       return []; // Devuelve un arreglo vacío en caso de error
//     })
//   ).subscribe(posts => {
//     this.posts = posts;
//   });
// }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../Post';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts: any [] = []

  constructor(private postService: PostService) {}

  ngOnInit(): void {

  }

  postList() {
    this.postService.getPosts()
    .subscribe(posts => {this.posts = posts
      console.log (this.posts)
    })

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

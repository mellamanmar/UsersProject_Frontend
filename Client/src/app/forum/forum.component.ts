import { Component, OnInit } from '@angular/core';
import { ForumService, Post } from './forum.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts: Post[] = [];

  editingPost: boolean = false;
  editedPost: Post = { _id: '', username: '', title: '', content: '' };

  searchUsername: string = '';
  searchPostId: string = '';

  postData = {
    title: '',
    content: '',
    username: '',
  }

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  // title: string = '';
  // content: string = '';
  // username: string = '';

  createPost() {
    this.forumService.createPost(this.postData)
    .pipe(tap(res => {console.log(res)})).subscribe()
  }

  // createPost(): void {
  //   // const postData = {
  //   //   title: this.title,
  //   //   content: this.content,
  //   //   username: this.username,

  //   // };

  //   this.forumService.createPost(this.postData)
  //     .subscribe(() => {
  //       this.getPosts();
  //       this.postData.title = '';
  //       this.postData.content = '';
  //       this.postData.username = '';
  //       res => {
  //         console.log(res);
  //       }
  //     });
  // }

  getPosts(): void {
    this.forumService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  deletePost(postId: string): void {
    this.forumService.deletePost(postId)
      .subscribe(() => {
        this.getPosts();
      });
  }

  editPost(post: Post): void {
    this.editingPost = true;
    this.editedPost = { ...post };
  }

  saveEditedPost(): void {
    this.forumService.editPost(this.editedPost._id, this.editedPost)
      .subscribe(() => {
        this.editingPost = false;
        this.getPosts();
      });
  }

  searchPosts(): void {
    if (this.searchUsername) {
      this.forumService.getPostsByUsername(this.searchUsername)
        .subscribe(posts => this.posts = posts as Post[]);
    } else {
      this.getPosts();
    }
  }
}

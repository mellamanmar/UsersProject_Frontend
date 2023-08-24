import { Component, OnInit } from '@angular/core';
import { ForumService, Post } from './forum.service';

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
        this.getPosts();
        this.title = '';
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
  } else if (this.searchPostId) {
    this.forumService.getById(this.searchPostId)
      .subscribe(posts => this.posts = [posts]); // Tratar como un objeto Post en un arreglo
  } else {
    this.getPosts();
  }
}

  
}

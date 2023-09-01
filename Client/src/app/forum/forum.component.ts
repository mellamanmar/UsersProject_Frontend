import { Component, OnInit, HostListener } from '@angular/core';
import { ForumService, Post } from './forum.service';
import { tap } from 'rxjs/operators';
import * as $ from 'jquery';


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

  isHeaderShrunk = false;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  // Animacion al hacer scroll jQuery
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    const self = this;
    $(function () {
      const shrinkHeader = 100;
      $(window).scroll(function () {
        const scroll = self.getCurrentScroll();
        if (scroll >= shrinkHeader) {
          $('.header').addClass('shrink');
          self.isHeaderShrunk = true;
        } else {
          $('.header').removeClass('shrink');
          self.isHeaderShrunk = false;
        }
      });
    });
  }

  //Crear post
  createPost() {
    this.forumService.createPost(this.postData)
      .pipe(tap(res => { console.log(res) })).subscribe()
  }

  // Obtener posts
  getPosts(): void {
    this.forumService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  // BOrrar posts
  deletePost(postId: string): void {
    this.forumService.deletePost(postId)
      .subscribe(() => {
        this.getPosts();
      });
  }

  // Buscar posts por username
  searchPosts(): void {
    if (this.searchUsername) {
      this.forumService.getPostsByUsername(this.searchUsername)
        .subscribe(posts => this.posts = posts as Post[]);
    } else {
      this.getPosts();
    }
  }

  getCurrentScroll(): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
}

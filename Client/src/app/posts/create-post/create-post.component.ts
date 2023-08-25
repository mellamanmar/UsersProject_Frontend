import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../post.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
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

  constructor(private forumService: PostService) { }

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

  // deletePost(postId: string): void {
  //   this.forumService.deletePost(postId)
  //     .subscribe(() => {
  //       this.getPosts();
  //     });
  // }

  // editPost(post: Post): void {
  //   this.editingPost = true;
  //   this.editedPost = { ...post };
  // }

  // saveEditedPost(): void {
  //   this.forumService.editPost(this.editedPost._id, this.editedPost)
  //     .subscribe(() => {
  //       this.editingPost = false;
  //       this.getPosts();
  //     });
  // }

  // searchPosts(): void {
  //   if (this.searchUsername) {
  //     this.forumService.getPostsByUsername(this.searchUsername)
  //       .subscribe(posts => this.posts = posts as Post[]);
  //   } else {
  //     this.getPosts();
  //   }
  // }
}




// import { Component } from '@angular/core';
// import { PostService } from '../post.service';

// @Component({
//   selector: 'app-create-post',
//   templateUrl: './create-post.component.html',
//   styleUrls: ['./create-post.component.css']
// })
// export class CreatePostComponent {
//   postData = {
//     title: '',
//     content: '',
//     username: ''
//   };

//   constructor(private postService: PostService) {}

//   createPost() {
//     this.postService.createPost(this.postData).subscribe(
//       response => {
//         console.log('Post created successfully', response);
//         // Realiza cualquier otra acción después de crear el post
//       },
//       error => {
//         console.error('Error creating post', error);
//       }
//     );
//   }
// }



// // import { Component } from '@angular/core';
// // import { PostService } from '../post.service';
// // import { tap } from 'rxjs/operators';

// // @Component({
// //   selector: 'app-create-post',
// //   templateUrl: './create-post.component.html',
// //   styleUrls: ['./create-post.component.css']
// // })
// // export class CreatePostComponent {

// //   postData = {
// //     title: '',
// //     content: '',
// //     username: '',
// //   };

// //   constructor(private postService: PostService) {}

  
// //   createPost() {
// //     this.postService.createPost(this.postData)
// //     .pipe(tap(res => {console.log(res)})).subscribe()
// //   }

// //   // createPost(): void {
// //   //   this.postService.createPost(this.postData)
// //   //     .pipe(tap(response => {
// //   //       console.log('Post created successfully', response);
// //   //       // Realiza cualquier otra acción después de crear el post
// //   //       this.postData.title = '';
// //   //       this.postData.content = '';
// //   //       this.postData.username = '';
// //   //     }))
// //   //     .subscribe(
// //   //       () => {},
// //   //       error => {
// //   //         console.error('Error creating post', error);
// //   //       }
// //   //     );
// //   // }
// // }


// // // import { Component } from '@angular/core';
// // // import { PostService } from '../post.service';
// // // import { tap } from 'rxjs/operators';
// // // import { Observable } from 'rxjs';

// // // @Component({
// // //   selector: 'app-create-post',
// // //   templateUrl: './create-post.component.html',
// // //   styleUrls: ['./create-post.component.css']
// // // })
// // // export class CreatePostComponent {
// // //   post: Post[] = {};

  
// // //   // title: string = '';
// // //   // content: string = '';
// // //   // username: string = '';


// // //   postData = {
// // //     title: '',
// // //     content: '',
// // //     username: '',
// // //   }

// // //   constructor(private postService: PostService) {}

// // //   // createPost() {
// // //   //   this.postService.createPost(this.postData).subscribe(
// // //   //     response => {
// // //   //       console.log('Post created successfully', response);
// // //   //       // Realiza cualquier otra acción después de crear el post
// // //   //     },
// // //   //     error => {
// // //   //       console.error('Error creating post', error);
// // //   //     }
// // //   //   );
// // //   // }

// // //   createPost() {
// // //     this.forumService.createPost(this.postData)
// // //     .pipe(tap(res => {console.log(res)})).subscribe()
// // //   }
  
  
// // //   createPost(): void {
// // //     const postData = {
// // //       title: this.title,
// // //       content: this.content,
// // //       username: this.username,

// // //     };

// // //     this.postService.createPost(this.postData)
// // //       .subscribe(() => {
// // //         this.getPosts();
// // //         this.postData.title = '';
// // //         this.postData.content = '';
// // //         this.postData.username = '';
// // //         res => {
// // //           console.log(res);
// // //         }
// // //       });
// // //   }
// // // }

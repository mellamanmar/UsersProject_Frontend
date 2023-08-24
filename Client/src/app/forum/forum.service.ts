import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  _id: string;
  username: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  private baseUrl = 'https://usersproject-database.onrender.com/api/forum';

  constructor(private http: HttpClient) { }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, postData);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }  

  getPostsByUsername(username: string) {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  getById(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/posts/${postId}`);
  }
  
  editPost(postId: string, postData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/edit/${postId}`, postData);
  }

  deletePost(postId: string) {
    return this.http.delete(`${this.baseUrl}/delete/${postId}`);
  }
}

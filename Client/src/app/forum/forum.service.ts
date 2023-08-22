import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  username: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class ForumService {
  private baseUrl = 'http://localhost:3000/api/forum'; // URL backend

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }  

  getPostsByUsername(username: string) {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  createPost(postData: any) {
    return this.http.post(`${this.baseUrl}/create`, postData);
  }

  deletePost(postId: string) {
    return this.http.delete(`${this.baseUrl}/delete/${postId}`);
  }
}

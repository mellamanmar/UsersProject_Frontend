import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Post {
  _id: string;
  title: string;
  content: string;
  username: string;

}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://usersproject-database.onrender.com/api/forum';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, postData);
  }
  editPost(postId: string, postData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/edit/${postId}`, postData);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${postId}`);
  }
}

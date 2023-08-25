import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private URL = 'https://usersproject-database.onrender.com/api/forum';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(`${this.URL}/posts`);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/posts/${id}`);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/create`, postData);
  }
  editPost(postId: string, postData: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/edit/${postId}`, postData);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/delete/${postId}`);
  }
}

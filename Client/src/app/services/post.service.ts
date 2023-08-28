import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, first, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private URL : string;
  private httpClient = inject(HttpClient)

  constructor() { this.URL = 'https://usersproject-database.onrender.com/api/forum'}

  getPosts(): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/posts`, this.createHeaders());
  }

  getPostById(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/posts/${id}`);
  }

  createPost(formValue: any) {
    return firstValueFrom (
      this.httpClient.post<any>(`${this.URL}/create`, formValue)
    )

  }
  editPost(postId: string, postData: any): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/edit/${postId}`, postData);
  }

  deletePost(postId: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/delete/${postId}`);
  }

  createHeaders() :Object {
    return {
      headers : new HttpHeaders ({
        'Authorization': localStorage.getItem('token')!
      })
    }
  }
}

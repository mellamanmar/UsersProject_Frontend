import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = 'http://localhost:3000/users/'; //URL de backend


  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  create(user:User): Observable<User> {
    return this.http.post<User>(this.url,user);
  }

  get(id:number): Observable<User> {
    return this.http.get<User>(this.url + '/'+ id);
  }

  update(user:User): Observable<User>{
    return this.http.put<User>(this.url,user)
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(this.url + '/' + id);
  }


}


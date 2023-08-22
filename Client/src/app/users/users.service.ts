import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private domain = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>( this.domain + '/users')
  }

  public getUserProfile (_id: User): Observable<User> {
    let direction = this.domain + _id
    return this.http.get<User>(direction)
  }
}

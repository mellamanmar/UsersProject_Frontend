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

  public getUserProfile(): Observable<any> {
    return this.http.get<any>( this.domain + '/users')
  }
}

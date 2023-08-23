import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://usersproject-database.onrender.com/api'
  constructor( private http:HttpClient ) { }

  signUpUser(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/signup', user);
  }

  logInUser(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/signin', user)
  }

}

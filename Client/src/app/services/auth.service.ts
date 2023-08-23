import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://usersproject-database.onrender.com/api'
  constructor( private http:HttpClient ) { }

  signUpUser(newUser: any): Observable<any>{
    return this.http.post<any>(this.URL + '/signup', newUser);
  }

  singInUser(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/signin', user)
  }

}

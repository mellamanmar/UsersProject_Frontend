import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'
  constructor(private http:HttpClient) { }

  signUpUser(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/signup', user);
  }

  logInUser(user: any): Observable<any>{
    return this.http.post<any>(this.URL + '/login', user)
  }
}

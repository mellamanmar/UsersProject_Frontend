import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://usersproject-database.onrender.com/api';

  constructor(private httpClient: HttpClient, private router: Router) { }

  signUpUser(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.URL}/signup`, formValue));
  }

  singInUser(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.URL}/signin`, formValue));
  }

  getUsers(){
    return this.httpClient.get<any>(this.URL + '/users');
  }
  
  getUserById(id: any){
    return this.httpClient.get<any>(this.URL + '/users/' + id);
  }
  
  editarUser(user: any, id: any){
    return this.httpClient.patch<any>(this.URL + '/edit/' + id, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getToken(){
    return localStorage.getItem('token');
  }
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }  
  
  redirectEdit(id: any){
    this.router.navigate([`/edit/user/${id}`]);
  }

  eliminar(user: any){
    return this.httpClient.delete<any>(this.URL + '/edit/delete/' + user._id);
  }


}

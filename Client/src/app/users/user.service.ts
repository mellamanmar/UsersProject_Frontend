import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private URL = 'https://usersproject-database.onrender.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: any){
      return this.http.post<any>(this.URL + '/signup', user);
  }

  signIn(user: any){
    return this.http.post<any>(this.URL + '/signin', user);
}

getUsers(){
  return this.http.get<any>(this.URL + '/users');
}

getUserById(id: any){
  return this.http.get<any>(this.URL + '/users/' + id);
}

editarUser(user: any, id: any){
  return this.http.patch<any>(this.URL + '/edit/' + id, user);
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
  return this.http.delete<any>(this.URL + '/edit/delete/' + user._id);
}

}

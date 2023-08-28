import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { User } from 'app/users/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL: string;
  private httpClient = inject(HttpClient);

  constructor() { this.URL ='https://usersproject-database.onrender.com/api'}

  getUsers() {
    return firstValueFrom (
      this.httpClient.get<any[]>(this.URL + '/users', this.createHeaders() )
    )
  }

  editUser(userId: string, userData: any) {
    return this.httpClient.put<any>(`${this.URL}/edit/${userId}`, userData);
  }

  deleteUser(userId: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}/${userId}`);
  }

  createHeaders() :Object {
    return {
      headers : new HttpHeaders ({
        'Authorization': localStorage.getItem('token')!
      })
    }
  }
}

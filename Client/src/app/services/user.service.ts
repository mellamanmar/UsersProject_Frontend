import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://usersproject-database.onrender.com/api'; // Cambiar la URL según tu configuración backend

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/users');
  }

  editUser(userId: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit/${userId}`, userData);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  }
}

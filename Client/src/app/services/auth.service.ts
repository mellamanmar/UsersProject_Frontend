import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL: string;
  private httpClient = inject(HttpClient);

  constructor( ) { this.URL = 'https://usersproject-database.onrender.com/api' }

  signUpUser(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.URL}/signup`, formValue));
  }

  singInUser(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.URL}/signin`, formValue));
  }

}

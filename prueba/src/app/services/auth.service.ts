import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataUser } from '../interfaces/data.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  url_login: string = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI'
  login(body: any) {
    return this.http.post<any>(this.url_login, body)
  }

  saveData(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getData() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  deleteData() {
    localStorage.clear();
  }

  saveAccountNumber(accountNumber: string){
    localStorage.setItem('numeroCuenta', accountNumber);
  }

}

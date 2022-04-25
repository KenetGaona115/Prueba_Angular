import { formatDate } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../interfaces/account.interface';
import { DataUser } from '../interfaces/data.interface';
import { Operation } from '../interfaces/operations.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getDateFormat() { return formatDate(Date.now(), 'yyyy-MM-dd', 'en-US') }

  createAccount(account: Account) {
    let data: DataUser = this.auth.getData();
    let params = new HttpParams().set('auth',data.token);
    return this.http.post<any>('https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json', account, { params })
  }

  getRecord(){
    let data: DataUser = this.auth.getData();
    let params = new HttpParams().set('auth',data.token);
    return this.http.get<Operation[]>('https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json', { params })
  }
}

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
    let params = this.returnParams()
    return this.http.post<any>('https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json', account, { params })
  }

  getRecord() {
    let params = this.returnParams()
    return this.http.get<Operation[]>('https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json', { params })
  }

  getList() {
    let params = this.returnParams()
    return this.http.get<any>('https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json', {params})
  }

  createOperation(operation: Operation) {
    let params = this.returnParams()
    operation.numeroCuenta = localStorage.getItem('numeroCuenta')!;
    console.log(operation)
    return this.http.post<any>('https://mibanco-333616-default-rtdb.firebaseio.com/transacciones/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json', operation, { params })
  }

  private returnParams() {
    let data: DataUser = this.auth.getData();
    return new HttpParams().set('auth', data.token);
  }
}

import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  account: Account = {
    numeroCuenta: "",
    saldo: 0.0,
    idCliente: 0,
    estado: "Activa",
    fechaUltimaAct: this.api_service.getDateFormat()
  };

  constructor(
    private api_service: ApiServiceService,
    private auth_service: AuthService
  ) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.auth_service.saveAccountNumber(this.account.numeroCuenta)
    this.api_service.createAccount(this.account)
      .subscribe(
        {
          next: (response: any) => {
            console.log(response)
            localStorage.setItem('saldo', this.account.saldo.toString())
          },
          error: (response: any) => { console.error(response) }
        }
      )
  }
}

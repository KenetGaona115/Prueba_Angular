import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  account: Account = {
    numeroCuenta: 0,
    saldo: 0,
    idCliente: 0,
    estado: "Activa",
    fechaUltimaAct: this.api_service.getDateFormat()
  };

  constructor(
    private api_service: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    console.log(this.account)
  }
}

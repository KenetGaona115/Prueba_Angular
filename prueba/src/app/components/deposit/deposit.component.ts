import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/interfaces/operations.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {

  operation: Operation = {
    fechaUltimaAct: this.api_service.getDateFormat(),
    monto: 0,
    numeroCuenta: 0,
    terminal: 'TERM235',
    tipo: 'Deposito',
    usuario: "u-231"
  };
  constructor(
    private api_service: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  deposit(): void {
    console.log(this.operation);
  }

}

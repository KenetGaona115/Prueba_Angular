import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/interfaces/operations.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {

  operation: Operation = {
    fechaUltimaAct: this.api_service.getDateFormat(),
    monto: 0,
    numeroCuenta: 0,
    terminal: 'TERM235',
    tipo: 'Retiro',
    usuario: "u-231"
  };
  constructor(
    private api_service: ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  withdrawal() {
    console.log(this.operation);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    numeroCuenta: '',
    terminal: 'TERM235',
    tipo: 'Retiro',
    usuario: "u-231"
  };
  constructor(
    private api_service: ApiServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  withdrawal() {
    if (localStorage.getItem('numeroCuenta'))
      this.api_service.createOperation(this.operation)
        .subscribe(
          {
            next: (response: any) => {
              console.log(response)
              const saldo = localStorage.getItem('saldo')
              localStorage.setItem('saldo', (parseFloat(saldo!) - this.operation.monto).toString())
            },
            error: (response: any) => { console.error(response) }
          }
        )
    else
      this.router.navigate(['addAccount'])
  }

}

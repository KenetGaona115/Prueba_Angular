import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    numeroCuenta: '',
    terminal: 'TERM235',
    tipo: 'Deposito',
    usuario: "u-231"
  };
  constructor(
    private api_service: ApiServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  deposit(): void {
    if (localStorage.getItem('numeroCuenta'))
      this.api_service.createOperation(this.operation)
        .subscribe(
          {
            next: (response: any) => {
              const saldo = localStorage.getItem('saldo')
              localStorage.setItem('saldo', (parseFloat(saldo!) + this.operation.monto).toString())
              console.log(response)
            },
          }
        )
    else
      this.router.navigate(['addAccount'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/interfaces/operations.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  constructor(
    private api: ApiServiceService,
    private router: Router
  ) { }

  recordArray: Operation[] = []
  saldo = localStorage.getItem('saldo')

  ngOnInit(): void {

    if (localStorage.getItem('numeroCuenta'))
      this.api.getRecord().subscribe(
        {
          next: (record: Operation[]) => {
            let numeroCuenta = localStorage.getItem('numeroCuenta');
            Object.values(record).forEach((element: Operation) => {
              if (element.numeroCuenta == numeroCuenta) {
                this.recordArray.push(element);
              }

            });
            console.log(this.recordArray)
          }
        }
      )
    else
        this.router.navigate(['addAccount'])
  }

}

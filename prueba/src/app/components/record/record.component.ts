import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interfaces/account.interface';
import { Operation } from 'src/app/interfaces/operations.interface';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  constructor(
    private api: ApiServiceService
  ) { }

  recordArray: Account[] = []

  ngOnInit(): void {
    this.api.getRecord().subscribe(
      {
        next: (record: Operation[]) => {
          let numeroCuenta = localStorage.getItem('numeroCuenta');
          Object.values(record).forEach(element => {
            if (element)
              this.recordArray.push();
          });
          console.log(this.recordArray)
        }
      }
    )
  }

}

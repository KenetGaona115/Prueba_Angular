import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Account } from '../../interfaces/account.interface';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit {

  constructor(
    private api: ApiServiceService
  ) { }

  lista: Account[] = [];
  ngOnInit(): void {
    this.api.getList().subscribe({
      next: (record: Account[]) => {
        Object.values(record).forEach((element: Account) => {
          this.lista.push(element)
        });
        console.log(this.lista)
      }
    });
  }

}

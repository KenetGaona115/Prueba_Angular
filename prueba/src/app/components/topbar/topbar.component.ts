import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
  ) { }

  items!: MegaMenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Iniciar sesion', icon: 'pi pi-user',
        routerLink: ['login']
      },
      {
        label: 'Alta de clientes', icon: 'pi pi-user-plus',
        routerLink: ['addUser']
      },
      {
        label: 'Apertura de cuenta', icon: 'pi pi-dollar',
        routerLink: ['addAccount']
      },
      {
        label: 'Operaciones', icon: 'pi pi-money-bill',
        items: [
          [
            {
              label: 'Depositos',
              items: [{ label: 'Realizar deposito', routerLink: ['deposit'] }]
            },
            {
              label: 'Retiros',
              items: [{ label: 'Realizar retiro', routerLink: ['withdrawal'] }]
            },
          ],
        ]
      },
      {
        label: 'Historial', icon: 'pi pi-history',
        routerLink: ['record']
      },
    ]
  }

}

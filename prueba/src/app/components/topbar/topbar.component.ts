import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  items!: MegaMenuItem[];

  ngOnInit(): void {
    this.items = [
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
      {
        label: 'Lista de cuentas', icon: 'pi pi-book',
        routerLink: ['listAccounts']
      },
      {
        label: 'cerrar sesion', icon: 'pi pi-sign-out',
        command: (event: Event) => { this.auth.deleteData() },
        routerLink: ['login']
      }
    ]
  }

}

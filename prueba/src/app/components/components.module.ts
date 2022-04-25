import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { PasswordModule } from 'primeng/password';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { TopbarComponent } from './topbar/topbar.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { InputTextModule } from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';


@NgModule({
  declarations: [
    TopbarComponent,
    LoginComponent,
    AddUserComponent,
    AddAccountComponent,
    DepositComponent,
    WithdrawalComponent,
    RecordComponent,
    ListAccountsComponent
  ],
  imports: [
    CommonModule,
    MegaMenuModule,
    CardModule,
    PasswordModule,
    FormsModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    TableModule
  ],
  exports: [
    TopbarComponent
  ],
})
export class ComponentsModule { }

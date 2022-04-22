import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { LoginComponent } from './components/login/login.component';
import { RecordComponent } from './components/record/record.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'addUser', component: AddUserComponent },
  { path: 'addAccount', component: AddAccountComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'record', component: RecordComponent },
  { path: 'withdrawal', component: WithdrawalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

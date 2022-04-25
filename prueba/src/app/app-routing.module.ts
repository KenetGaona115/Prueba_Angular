import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { LoginComponent } from './components/login/login.component';
import { RecordComponent } from './components/record/record.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';
import { AuthGuard } from './services/authguard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'addAccount', component: AddAccountComponent, canActivate: [AuthGuard] },
  { path: 'deposit', component: DepositComponent, canActivate: [AuthGuard] },
  { path: 'record', component: RecordComponent, canActivate: [AuthGuard] },
  { path: 'withdrawal', component: WithdrawalComponent, canActivate: [AuthGuard] },
  { path: 'listAccounts', component: ListAccountsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

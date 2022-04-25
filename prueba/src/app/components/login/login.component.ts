import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [``]
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];

  email: string = ''
  password: string = '';
  returnSecureToken: string = 'true'

  constructor(
    private router: Router,
    private auth_service: AuthService
  ) { }

  ngOnInit(): void {
  }

  validateUser(): void {

    this.auth_service.login(
      {
        email: this.email,
        password: this.password,
        returnSecureToken: this.returnSecureToken
      }
    ).
      subscribe(
        {
          next: (res: any) => {
            console.log(res)
            if (res.registered) {

              this.auth_service.saveData(
                {
                  email: res.email,
                  token: res.idToken,
                  numeroCuenta: 0
                }
              )
            }
          }
        }
      )

    this.router.navigate(['/addUser']);
  }
}

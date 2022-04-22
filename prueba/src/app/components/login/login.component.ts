import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:[``]
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];

  email: string = ''
  password: string = '';

  constructor(
    private router:Router
  ){ }

  ngOnInit(): void {
  }

  validateUser(): void {
    this.router.navigate(['/']);
  }
}

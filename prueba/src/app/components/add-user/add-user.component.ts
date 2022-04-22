import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = {
    address: '',
    age: 1,
    gender: '',
    id: 0,
    name: ''
  };

  options = [
    "Masculino",
    "Femenino"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  createUser(): void {

  }

}

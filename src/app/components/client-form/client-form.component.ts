import { Component, OnInit } from '@angular/core';
import { IClient } from '../../interfaces/Client';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  @ViewChild('clientForm') form: any;
  client: IClient = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  };
  disableBalanceOnAdd: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}

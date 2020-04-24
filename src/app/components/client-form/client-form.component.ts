import { Component, OnInit } from '@angular/core';
import { IClient } from '../../interfaces/Client';
import { ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

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
  constructor(
    private _flashMsg: FlashMessagesService,
    private _clientService: ClientService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  submitClient({ value, valid }: { value: IClient; valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this._flashMsg.show('The form is invalid', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
    } else {
      this._clientService.addClient(value);
      this._flashMsg.show('New Client has been added', {
        cssClass: 'alert-success',
        timeout: 3000,
      });
      this.form.reset();
      this._router.navigate(['/']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../interfaces/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  id: string;
  client: IClient = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0,
  };
  disableBalanceOnEdit: boolean = true;
  constructor(
    private _clientService: ClientService,
    private _router: Router,
    private route: ActivatedRoute,
    private _flashmsg: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._clientService.getClient(this.id).subscribe((client) => {
      this.client = client;
    });
  }

  editClient({ value, valid }: { value: IClient; valid: boolean }) {
    if (!valid) {
      this._flashmsg.show('Form is invalid.', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
    } else {
      value.id = this.id;
      this._clientService.updateClient(value);
      this._flashmsg.show('Client has been updated.', {
        cssClass: 'alert-success',
        timeout: 3000,
      });
      this._router.navigate(['/client/' + this.id]);
    }
  }
}

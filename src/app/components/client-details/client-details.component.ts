import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../interfaces/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: IClient;
  hasBalance: boolean = false;
  showBalanceUpdate: boolean = false;
  constructor(
    private _clientService: ClientService,
    private _router: Router,
    private route: ActivatedRoute,
    private _flashmsg: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this._clientService.getClient(this.id).subscribe((client) => {
      if (client != null) {
        if (client.balance > 0) {
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../interfaces/Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: IClient[];

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this._clientService.getClients().subscribe((clients) => {
      console.log(clients);
      this.clients = clients;
    });
  }
}

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
  totalOwed: number;

  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this._clientService.getClients().subscribe((clients) => {
      console.log(clients);
      this.clients = clients;
      this.sumTotalOwed();
    });
  }

  sumTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return total + client.balance;
    }, 0);
  }
}

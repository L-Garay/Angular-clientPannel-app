import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { IClient } from '../../interfaces/Client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _clientService: ClientService,
    private _router: Router,
    private route: ActivatedRoute,
    private _flashmsg: FlashMessagesService
  ) {}

  ngOnInit(): void {}
}

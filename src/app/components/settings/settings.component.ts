import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SettingsService } from 'src/app/services/settings.service';
import { ISettings } from '../../interfaces/ISettings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settings: ISettings;

  constructor(
    private _router: Router,
    private _flashmsg: FlashMessagesService,
    private _settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this.settings = this._settingsService.getSettings();
  }

  changeSettings() {
    this._settingsService.changeSettings(this.settings);
    this._flashmsg.show('Settings have been saved', {
      cssClass: 'alert-success',
      timeout: 3000,
    });
  }
}

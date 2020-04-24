import { Component, OnInit } from '@angular/core';
import { IClient } from '../../interfaces/Client';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _flashmsg: FlashMessagesService,
    private _settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    this._authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.showRegister = this._settingsService.getSettings().allowRegistration;
  }
  logout() {
    this._authService.logout();
    this._flashmsg.show('Successfully logged out', {
      cssClass: 'alert-success',
      timeout: 3000,
    });
    this._router.navigate(['/login']);
  }
}

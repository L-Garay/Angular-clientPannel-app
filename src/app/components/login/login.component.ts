import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private _authService: AuthService,
    private _flashMsg: FlashMessagesService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._authService.getAuth().subscribe((auth) => {
      if (auth) {
        this._router.navigate(['/']);
      }
    });
  }

  login() {
    this._authService
      .login(this.email, this.password)
      .then((res) => {
        this._flashMsg.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 3000,
        });
        this._router.navigate(['/']);
      })
      .catch((err) => {
        this._flashMsg.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 5000,
        });
      });
  }
}

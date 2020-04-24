import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private _authService: AuthService,
    private _flashMsg: FlashMessagesService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this._authService
      .register(this.email, this.password)
      .then((res) => {
        this._flashMsg.show('Registered successfully and logged in', {
          cssClass: 'alert-success',
          timeout: 4000,
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

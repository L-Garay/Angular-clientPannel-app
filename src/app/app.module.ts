import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ClientService } from './services/client.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
  ],
  providers: [ClientService, AuthService, SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

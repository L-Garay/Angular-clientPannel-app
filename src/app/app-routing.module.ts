import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { AuthGaurd } from './gaurds/auth.gaurd';
import { RegisterGaurd } from './gaurds/register.gaurd';

export const routingComponents = [
  NavbarComponent,
  DashboardComponent,
  ClientDetailsComponent,
  ClientFormComponent,
  ClientsComponent,
  SidebarComponent,
  EditClientComponent,
  LoginComponent,
  RegisterComponent,
  SettingsComponent,
  RouteNotFoundComponent,
];

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGaurd] },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RegisterGaurd],
  },
  {
    path: 'client/add',
    component: ClientFormComponent,
    canActivate: [AuthGaurd],
  },
  {
    path: 'client/edit/:id',
    component: EditClientComponent,
    canActivate: [AuthGaurd],
  },
  {
    path: 'client/:id',
    component: ClientDetailsComponent,
    canActivate: [AuthGaurd],
  },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGaurd] },
  { path: '**', component: RouteNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd, RegisterGaurd],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AuthenticationComponent } from 'app/authentication/authentication.component';
import { SummaryComponent } from 'app/summary/summary.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { HelpComponent } from 'app/help/help.component';
import { AboutComponent } from 'app/about/about.component';
import { ErrorsComponent } from 'app/errors/errors.component';

import { CardsRoutingModule } from 'app/cards/cards-routing.module';
import { EntryRoutingModule } from 'app/entry/entry-routing.module';
import { AuthenticationGuardService } from 'app/services/authentication-guard.service';
//import { AuthenticationCallbackComponent } from 'app/authentication-callback/authentication-callback.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'logout', component: AuthenticationComponent },
  { path: 
    'summary/:id', 
    component: SummaryComponent , 
    canActivate: [AuthenticationGuardService] 
  },
  { 
    path: 'settings', 
    component: SettingsComponent, 
    canActivate: [AuthenticationGuardService] 
  },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorsComponent },
  //{ path: 'auth-callback', component: AuthenticationCallbackComponent }
];

@NgModule({
  imports: [
    CardsRoutingModule,
    EntryRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { AbwesenheitenComponent } from './pages/abwesenheiten/abwesenheiten.component';
import { AnsprechpartnerComponent } from './pages/ansprechpartner/ansprechpartner.component';
import { EinstellungenComponent } from './pages/einstellungen/einstellungen.component';
import { ErfolgeComponent } from './pages/erfolge/erfolge.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { StundenplanComponent } from './pages/stundenplan/stundenplan.component';

const routes: Routes = [
  { path: '', redirectTo: 'anmelden', pathMatch: 'full'},
  { path: 'anmelden', component: LoginComponent},
  { path: 'startseite', canActivate: [IsAuthenticatedGuard], component: StartseiteComponent},
  { path: 'stundenplan', canActivate: [IsAuthenticatedGuard], component: StundenplanComponent},
  { path: 'abwesenheiten', canActivate: [IsAuthenticatedGuard], component: AbwesenheitenComponent},
  { path: 'erfolge', canActivate: [IsAuthenticatedGuard], component: ErfolgeComponent},
  { path: 'ansprechpartner', canActivate: [IsAuthenticatedGuard], component: AnsprechpartnerComponent},
  { path: 'profil', canActivate: [IsAuthenticatedGuard], component: ProfilComponent},
  { path: 'einstellungen', canActivate: [IsAuthenticatedGuard], component: EinstellungenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }

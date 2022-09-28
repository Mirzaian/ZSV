import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './overlay/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { StundenplanComponent } from './pages/stundenplan/stundenplan.component';
import { AbwesenheitenComponent } from './pages/abwesenheiten/abwesenheiten.component';
import { ErfolgeComponent } from './pages/erfolge/erfolge.component';
import { AnsprechpartnerComponent } from './pages/ansprechpartner/ansprechpartner.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EinstellungenComponent } from './pages/einstellungen/einstellungen.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartseiteComponent,
    StundenplanComponent,
    AbwesenheitenComponent,
    ErfolgeComponent,
    AnsprechpartnerComponent,
    ProfilComponent,
    EinstellungenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

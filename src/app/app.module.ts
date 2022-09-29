import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './overlay/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { StundenplanComponent } from './pages/stundenplan/stundenplan.component';
import { AbwesenheitenComponent } from './pages/abwesenheiten/abwesenheiten.component';
import { ErfolgeComponent } from './pages/erfolge/erfolge.component';
import { AnsprechpartnerComponent } from './pages/ansprechpartner/ansprechpartner.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EinstellungenComponent } from './pages/einstellungen/einstellungen.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './overlay/footer/footer.component';


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
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
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

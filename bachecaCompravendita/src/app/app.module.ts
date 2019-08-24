import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Aggiungiamo qui 

import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ElencoComponent } from './elenco/elenco.component';
import { BachecaCommentiComponent } from './bacheca-commenti/bacheca-commenti.component';
import { CategorieComponent } from './categorie/categorie.component';
import { TuoioggComponent } from './tuoiogg/tuoiogg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    ElencoComponent,
    BachecaCommentiComponent,
    CategorieComponent,
    TuoioggComponent,

  ],
  imports: [
    BrowserModule, FormsModule,  //Anche qui
   ReactiveFormsModule,  NgbModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

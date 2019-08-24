import { Component, OnInit, Input } from '@angular/core';
import { Utente } from '../Utente';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
@Input() lista;
errore:boolean=false;
errore1:boolean=false;
   myForm: FormGroup;
 constructor(fb: FormBuilder) {

   this.myForm = fb.group({
     'nome': ['', Validators.required],
     'cognome': ['', Validators.required],
     'email': ['', [Validators.required , Validators.email]],
     'psw': ['', Validators.required]


   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
     this.errore=false;
     this.errore1=false;
    let utente: Utente = new Utente();
    utente.nome =  this.myForm.controls['nome'].value;
    utente.cognome = this.myForm.controls['cognome'].value;

    utente.email = this.myForm.controls['email'].value;
    utente.psw = this.myForm.controls['psw'].value;

for(let i = 0; i < this.lista.length; i++)
    {
      if(utente.email == this.lista[i].email &&
        utente.psw == this.lista[i].psw)
      {
        this.errore=true;
      }
    }
    if(utente.nome==""){
        this.errore1=true;
    }else{
    if(this.errore==false){
    this.lista.push(utente);
    }
    }
  }

 }

import { Component, OnInit} from '@angular/core';
import {Annunci} from '../mock-annunci';
import {Annuncio} from '../Annuncio';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
ann:Annuncio[]=Annunci;
  vett=[];
  ricerca="";

  motori(){
      this.vett=[null];


    for(let i = 0; i < this.ann.length; i++)
    {
      if("motori" === this.ann[i].categoria){

          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)
      }}

      }

     gioielli(){this.vett=[null];
for(let i = 0; i < this.ann.length; i++)
    {
      if("gioielli" === this.ann[i].categoria){
          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)
      }
     }

     }
     case(){this.vett=[null];
for(let i = 0; i < this.ann.length; i++)
    {
      if("case" === this.ann[i].categoria){
          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)
      }

     }}
     elettronica(){this.vett=[null];
for(let i = 0; i < this.ann.length; i++)
    {
      if("elettronica" === this.ann[i].categoria){
          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)
      }
     }
     }
     animali(){this.vett=[null];
for(let i = 0; i < this.ann.length; i++)
    {
      if("animali" === this.ann[i].categoria){
          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)
      }

     }}
     sport(){this.vett=[null];
for(let i = 0; i < this.ann.length; i++)
    {
      if("sport" === this.ann[i].categoria){
          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)
      }
     };

     }
     cerca(cercasi:string){
this.ricerca=cercasi;

      this.vett=[null];

    for(let i = 0; i < this.ann.length; i++)
    {
      if(this.ricerca === this.ann[i].categoria){

          this.vett.push(this.ann[i].nome)
          this.vett.push(this.ann[i].cognome)
          this.vett.push(this.ann[i].prodotto)

      }

      }
      }


  constructor() { }



  ngOnInit() {
  }

}

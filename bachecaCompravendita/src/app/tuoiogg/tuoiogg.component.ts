import { Component, OnInit,Input } from '@angular/core';
import {Annunci} from '../mock-annunci';
import {Annuncio} from '../Annuncio';
@Component({
  selector: 'app-tuoiogg',
  templateUrl: './tuoiogg.component.html',
  styleUrls: ['./tuoiogg.component.css']
})
export class TuoioggComponent implements OnInit {
@Input() loggedUser;
ann:Annuncio[]=Annunci;
vett=[];
num=0;
error:boolean=false;
error1:boolean=false;
vedi(){
    if(this.num<1){
for(let i = 0; i < this.ann.length; i++)
    {
      if(this.loggedUser.nome === this.ann[i].nome)
      {
          this.vett.push(this.ann[i].prodotto)
          this.vett.push(this.ann[i].descrizione)
          this.vett.push(this.ann[i].categoria)
          this.num++;
          this.error=false;
          this.error1=true;
      }

}
if(this.num==0){
this.error=true;
   }
}
}
rimuovi(){
    if(this.num==1){
for(let i = 0; i < this.ann.length; i++)
    {
      if(this.loggedUser.nome === this.ann[i].nome)
      {
          this.ann[i].prodotto="venduto";
          this.ann[i].descrizione="venduto";
          this.ann[i].categoria="venduto";
      }

}
   }
}
  constructor() {


  }

  ngOnInit() {
  }

}

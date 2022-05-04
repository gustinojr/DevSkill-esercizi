import { Component, OnInit } from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
c:number;
f:number;
km:number;
mi:number;


unita:string;
 
constructor(){}

notificaConversione(messaggio: string){

  let risultato:number=0;

  const messaggioSpezzettato = messaggio.split(":");

  this.unita = messaggioSpezzettato[0];
  risultato = +messaggioSpezzettato[1];

  if (this.unita === "c"){
    this.f = risultato;
  }
  if (this.unita === "f"){
    this.c = risultato;
  }
  if (this.unita === "km"){
    this.mi = risultato;
  }
  if (this.unita === "mi"){
    this.km = risultato;
  }
}
 
  

  






}
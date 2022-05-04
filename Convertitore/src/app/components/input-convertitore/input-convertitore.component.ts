import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-input-convertitore',
  templateUrl: './input-convertitore.component.html',
  styleUrls: ['./input-convertitore.component.scss'],
})
export class InputConvertitoreComponent implements OnInit {
  @Input() misura:string;
  @Input() valore:number;
  valoreConvertito:number;
  @Output() 
  eventoConversione = new EventEmitter<string>();

 

    constructor() {}
    ngOnInit(){}
    convertitore( ):void {
      if (this.misura === "c") {
        this.valoreConvertito = this.arrotonda((this.valore * 9 / 5) + 32);
      } else if (this.misura === "f") {
        this.valoreConvertito = this.arrotonda((this.valore - 32) * 5 / 9);
      } else if (this.misura === "km") {
        this.valoreConvertito = this.arrotonda(this.valore / 1.609);
      } else if (this.misura === "mi") {
        this.valoreConvertito = this.arrotonda(this.valore * 1.609);
      }
      this.eventoConversione.emit(this.misura+":" + this.valoreConvertito);
    }
    arrotonda(risultato: number): number {
      return +risultato.toPrecision(3);
    }
  }
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uva100',
  templateUrl: './uva100.page.html',
  styleUrls: ['./uva100.page.scss'],
})
export class Uva100Page implements OnInit {

  constructor() { }

  ngOnInit() { }
  @Input() i: number;
  @Input() j: number;
  @Output()
  evento = new EventEmitter<number>();

 a: number[] = [];
 max: number = 0;
 occ: number = 0;
 
 
 
massimo(i:number, j:number):void{
while (j >= i) {
    let n: number = j;
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2
            this.a.push(n)
        } else {
            n = 3 * n + 1
            this.a.push(n)
        }
        this.occ = this.a.length+1;
    }

    if (this.occ > this.max) {
        this.max = this.occ;
    }
    this.a = [];
    j--
}
this.evento.emit(this.max);

}

stampa(){
  console.log(this.max);
}
}

import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-uva100',
  templateUrl: './uva100.page.html',
  styleUrls: ['./uva100.page.scss'],
})
export class Uva100Page implements OnInit {
i: number;
j: number; 
a: number[] = [];
max: number = 0;
occ: number = 0;
k:number;
constructor() { 
  }

ngOnInit() { }

 
 
 
massimo():void{
 this.k=this.j;
while (this.j >= this.i) {
    let n: number = this.j;
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
    this.j--;
    }
}


}

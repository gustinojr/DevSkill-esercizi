import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uva136',
  templateUrl: './uva136.page.html',
  styleUrls: ['./uva136.page.scss'],
})
export class Uva136Page implements OnInit {
  i:number;
  uglyList: number[] = []
  start = 1;
  temp = this.start;
  ultimo:number;
  brutto(){
  while (this.uglyList.length < this.i) {
  
      if (this.temp % 2 == 0 || this.temp % 3 == 0 || this.temp % 5 == 0) {
          if (this.temp % 2 == 0) {
            this.temp /= 2;
          }
          if (this.temp % 3 == 0) {
            this.temp /= 3;
          }
          if (this.temp % 5 == 0) {
            this.temp /= 5;
          }
      } else if (this.temp == 1) {
        this.uglyList.push(this.start++);
        this.temp = this.start;
      } else {
        this.temp = ++this.start;
      }
  
  } 
  this.ultimo = this.uglyList.pop();
  return this.ultimo;
  }
 
  


  constructor() { }

  ngOnInit() {
  }

}

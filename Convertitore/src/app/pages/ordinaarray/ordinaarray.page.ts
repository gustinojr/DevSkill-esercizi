import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordinaarray',
  templateUrl: './ordinaarray.page.html',
  styleUrls: ['./ordinaarray.page.scss'],
})
export class OrdinaarrayPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

a: number[] = [];
i:number;
lenghtA: number; 

riempiArray(){
for (let i = 0; i < this.lenghtA; i++) {
  let num: number;
  this.a[i] = num;
  this.a.push(num);

}console.log(this.a);
}  


ordinaArrayC(a: number[]): number[] {
  for (let i = 0; i < this.lenghtA - 1; i++) {
    for (let j = i + 1; j < this.lenghtA; j++) {
      if (a[i] > a[j]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
  
}


ordinaArrayD(a: number[]): number[] {
  for (let i = 0; i < this.lenghtA - 1; i++) {
    for (let j = i + 1; j < this.lenghtA; j++) {
      if (a[i] < a[j]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
  
}


}
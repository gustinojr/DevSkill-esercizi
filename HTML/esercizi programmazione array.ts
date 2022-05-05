\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\ESERCIZIO 1\\\\\\\\\\\\\


function leggiInput(): number {
    return +prompt("Inserisci un numero");
}

let a: number[] = [];
let b: number[] = [];
let c: number[] = [];

let inputA = leggiInput();
let inputB = leggiInput();

for (let i = 0; i < 10; i++) {
    if(i > 5 ){
    if (inputA === -1 || inputB === -1) {
        break;
    }
}
    a.push(inputA);
    b.push(inputB);
    inputA = leggiInput();
    inputB = leggiInput();
}

for (let k = 0; k < a.length; k++) {
    if (k % 2 == 0) {
        c.push(a[k]);
    } else {
        c.push(b[k]);
    }
}

console.log("Array A " + a);
console.log("Array B " + b);
console.log("Array C " + c);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\ESERCIZIO 2\\\\\\\\\\\\\\\


let a: number[] = [];
let b: number[] = [];
let c: number[] = [];

let inputA:number = +prompt("inserisci valore A");
let inputB:number = +prompt("inserisci valore B");

for (let i = 0; i < 5; i++) {
    a.push(inputA);
    b.push(inputB);
    inputA = +prompt("inserisci valore A");
    inputB = +prompt("inserisci valore B");
}
for (let j = 0; j < 5; j++) {

    if (inputA === -1 ){
        break;
    }else{
    a.push(inputA);
    inputA = +prompt("inserisci valore A");
    }
}
for (let z = 0; z < 5; z++) {

    if (inputB === -1 ){
        break;
    }else{
     b.push(inputB);
    inputB = +prompt("inserisci valore B");
   }
}
b.reverse();
c=a.concat(b);

console.log("Array A " + a);
console.log("Array B " + b);
console.log("Array C " + c);
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\\\\\\\\\\\\ESERCIZIO 3\\\\\\\\\\\\\\\\\\\\\


function leggiInput(): number {
    return +prompt("Inserisci un numero,-1 per terminare");
  }

  let sequenza: number[] = [];
  let input = leggiInput();

  while (input != -1) {


    sequenza.push(input);
    input = leggiInput();

  }
let k=0
let j=k+1
let max=0
let n = 0;
let occ:number=1;
for (let i=0; i< sequenza.length;i++){

    if(sequenza[k]==sequenza[j]){
        occ++
    }else{
        occ=1;
    }
    if(occ > max){
        max=occ;
        n= sequenza[k];
    }
    k++
    j++

}
console.log(n, max);
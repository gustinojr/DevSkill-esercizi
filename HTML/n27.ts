function leggiInput() {
  return +prompt("inserisci i numeri da confrontare -1 per concludere la sequenza")
}
let n: number = +prompt("inserisci il numero di confronto");
let numeri: number[] = [];
let risposta: number = 0;
let temp = 0;

while (temp != -1) {
  temp = leggiInput()
  numeri.push(temp)

}

for (let i = 0; i < numeri.length; i++) {

  if (n >= numeri[i] && n >= numeri[i + 1]) {

    risposta++
  }
}
console.log(numeri);
if (risposta == n) {
  console.log("OK")
} else {
  console.log("NO")
}
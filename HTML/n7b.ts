
function leggiInput() {
  return +prompt("inserisci un numero intero");

}
let x: number = +prompt("inserisci intero di controllo");
let lunghezza: number = +prompt("inserisci lunghezza della serie");
let interi: number[] = [];
let numero: number;
let risultato: number[] = [];


for (let i = 0; i < lunghezza; i++) {
  numero = leggiInput();
  interi.push(numero);
}
for (let i = 0; i < lunghezza; i++) {
  if (interi[i] < x) {
    if (interi[i] % 2 == 0) {
      risultato.push(interi[i]);
    }
  }
}
let stringa = risultato.join("");
console.log(stringa);
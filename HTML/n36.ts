

let divisore: number = +prompt("inserisci il numero divisore");
let interi: number[] = [];
let risposta;

function divisibile(divisore: number, interi: number): boolean {

  if (interi % divisore == 0) {
    risposta = true
  } else {
    risposta = false

  } return risposta
}


for (let i = 0; i < 10; i++) {
  let numeri: number = +prompt("inserisci un numero intero");
  interi.push(numeri);
}

for (let j = 0; j < interi.length; j++) {
  divisibile(divisore, interi[j]);
  if (risposta == true) {
    break
  }
}

if (risposta == true) {
  console.log("NO");
} else {
  console.log("OK");
}



function diviEtImperat(n: string) {
  let dividiStringa = n.split("");
  let inversione = dividiStringa.reverse();
  let nInv = inversione.join("");
  return nInv
}
let n: string = prompt("inserisci intero di controllo");

function sottrazione(n: string, nInv: string) {

  n = +n;
  nInv = +nInv;
  let finale = n - nInv;
  return finale
}

let nInv: string = diviEtImperat(n);
console.log(sottrazione(n, nInv))
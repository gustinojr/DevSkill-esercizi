let livelli:number=+prompt("inserisci il numero dei livelli");
let altezzaM:number []=[];
let alto=0;
let basso=0;

for (let i=0;i<livelli;i++){
  let muri:number=+prompt("inserisci il numero dei muri");
  for (let j=0; j < muri;j++){
    let altezza:number=+prompt("inserisci l'altezza dei muri");
    altezzaM.push(altezza);
    console.log(altezzaM);
  }
  for(let k=0;k<muri-1;k++ ){
    if(altezzaM[k]<altezzaM[k+1]){
      alto++;
    } 
    if(altezzaM[k]>altezzaM[k+1]){
      basso++;
    }
     
  }
  console.log("Nel livello "+altezzaM[i]+" il numero di salti verso alto è "+alto +" ed il numero di salti verso il basso è "+basso);
  altezzaM=[];
  alto=0;
  basso=0;
}
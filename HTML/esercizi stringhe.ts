////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Parole palindrome ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

function reverseString(input:string){
    return b=input.split("").reverse().join("");
}

let input=prompt("inserisci una parola per verificare se è palindroma");
let b:string;
reverseString(input);
if(input==b){
  console.log("la parola "+input +" è palindroma");
}else{
  console.log("la parola "+input+ " non è palindroma");
}
console.log(b);


//////////////////////////////////////////////////////////////////////////////
///////// Concatenare due parole,la prima più l'inverso della seconda ///////
////////////////////////////////////////////////////////////////////////////


function reverseString(inputB:string){
    return reverso=inputB.split("").reverse().join("");
}

let inputA=prompt("inserisci la prima parola");
let inputB=prompt("inserisci la seconda parola");
let reverso:string;
reverseString(inputB);
console.log(inputA+reverso);


//////////////////////////////////////////////////////////////////////////
////////////// Concatenare due parole alternando le lettere /////////////
////////////////////////////////////////////////////////////////////////
alert("inserire 2 parole della stessa lunghezza");

let inputA:string=prompt("inserisci la prima parola");
let inputB:string=prompt("inserisci la seconda parola");
let c:string="";
console.log(inputA,inputB)
if(inputA.length!=inputB.length){
  console.log("le parole inserite non sono della stessa lunghezza")
}else{
  for(let i=0;i<inputA.length;i++){
   if(i%2==0){
     c=c.concat(inputA.charAt(i))
   }else{
     c=c.concat(inputB.charAt(i))
   }
  }
  console.log(c);
}


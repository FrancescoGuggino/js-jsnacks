/*
Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato.
L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N),
 e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
 */

 let nNumeri = parseInt(prompt("Inserisci N numeri:"));
 let printNumbers = inserisciNumeri(nNumeri);

let sommaTuttiNumeri = sommaNumeri(sommaNNumeri);
 
 
console.log(printNumbers);
console.log(sommaTuttiNumeri);

//------------ funzione ---------

function inserisciNumeri(nNumeri) {

    let sommaNNumeri = [];

    for (let i = 0; i < nNumeri; i++) {
        let numeriUtente = parseInt(prompt("Inserisci i numeri:"));

        sommaNNumeri.push(numeriUtente);
    }

    return sommaNNumeri;
}

function sommaNumeri(sommaNNumeri) {
    let somma = 0;

    for (let i = 0; i <sommaNNumeri.length; i++){
        somma = somma+sommaNNumeri[i];
    }
    return somma  
}
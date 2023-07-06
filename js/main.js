/*
Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array, restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato.
L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N),
 e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
 */

 let lunghezzaArray = parseInt(prompt("Inserisci N numeri:"));
 let arrayNumeriUtente = askUserNumbers(lunghezzaArray);

let sommaTuttiNumeri = sommaNumeri(arrayNumeriUtente);


// let array2 = [1, 2, 3];
// let array3 = [23, 22, 43];

// let somma2 = sommaNumeri(array2)
// let somma3 = sommaNumeri(array3)
 
console.log(arrayNumeriUtente);
console.log(sommaTuttiNumeri);


//------------ funzione ---------

function askUserNumbers(nNumeri) {

    let arrayNumeri = [];

    for (let i = 0; i < nNumeri; i++) {
        let numeriUtente = parseInt(prompt("Inserisci i numeri:"));

        arrayNumeri.push(numeriUtente);
    }

    return arrayNumeri;
}

function sommaNumeri(arrayGenerico) {
    let somma = 0;

    for (let i = 0; i <arrayGenerico.length; i++){
        somma = somma+arrayGenerico[i];
    }
    return somma
}
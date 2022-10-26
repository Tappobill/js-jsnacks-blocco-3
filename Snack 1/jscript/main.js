// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let listaNumeri = [];

let totale = 0;

let i = 0;

while (totale < 50) {
    let numeri = parseInt(prompt("Inserisci un numero"));

    totale = totale + numeri;
    if (totale < 50) {
        listaNumeri.push(numeri);
    } else {
        console.log("Somma maggiore di 50")
    }

    i++;
}

console.log(listaNumeri);
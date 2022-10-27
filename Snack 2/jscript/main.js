// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

i2 = 0;

let totale2 = 0;

while (i2 < 5) {
    let numeri2 = parseInt(prompt("Inserisci un numero2"));

    totale2 = totale2 + numeri2;

    i2++;
}

console.log(totale2);
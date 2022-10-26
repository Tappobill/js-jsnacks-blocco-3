// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

i = 0;

let totale2 = 0;

while (i < 5) {
    let numeri2 = parseInt(prompt("Inserisci un numero2"));

    totale2 = totale2 + numeri2;

    i++;
}

console.log(totale2);
// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.

let n = parseInt(prompt("Inserisci un numero3"));

let i3 = 0;

while (i3 < n) {
    console.log(`il numero del ciclo è: ${i3}`)

    let array = [];
    while (array.length < 10) {
        let numeri3 = Math.floor(Math.random() * 100);
        array.push(numeri3);
    }

    console.log(array);

    i3++;
}


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


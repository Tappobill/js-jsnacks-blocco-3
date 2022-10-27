// *Snack4 (Bonus)*
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Interrompi il ciclo appena il nome è stato trovato.

let listaInvitati = ["Mario", "Chri", "Ale"];

let nomi = prompt("Inserisci il nome");

let i4 = 0;

let statoNome = false;

while (i4 < nomi.length) {
    if (nomi == listaInvitati[i4]) {
        statoNome = true;

    }

    i4++;
    // break;
}

if (statoNome) {
    console.log("Invitato");
} else {
    console.log("Iscriviti");
}
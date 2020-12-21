// dichiaro le var 
var scelta = prompt('Inserisci una scelta fra pari o dispari').toLowerCase();
var sceltaN = parseInt( prompt('Scegli un numero fra 1 e 5'));
var sceltaPc = generatoreRandom(1, 5);
var somma = sceltaN + sceltaPc;
var vincitore = risultato(somma,scelta,somma);
alert('Hai scelto ' + ' ' + scelta)

// // scrivo if per definire se la somma dei due numeri è pari 
// if(somma % 2 == 0){
//     if(scelta == 'pari'){
//         document.write('Giocatore hai vinto perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero pari' + ' ' + somma);
//     } else{
//         document.write('Hai perso perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero pari' + ' ' + somma);
//     }
// }

// // scrivo if per definire se la somma dei due numeri è dispari
// if(somma % 2 != 0){
//     if(scelta == 'dispari'){
//         document.write('Giocatore hai vinto perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero dispari' + ' ' + somma);
//     } else{
//         document.write('Hai perso perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero dispari' + ' ' + somma);
//     }
// }


// funzioni 

// funzione per genare un numero intero random
function generatoreRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione per decretare il vincitore 
function risultato(n1,n2,n3){
    
    // scrivo if per definire se la somma dei due numeri è pari 
    if(n1 % 2 == 0){
        if(n2 == 'pari'){
            document.write('Giocatore hai vinto perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero pari' + ' ' + n3);
        } else{
            document.write('Hai perso perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero pari' + ' ' + n3);
        }
    }

    // scrivo if per definire se la somma dei due numeri è dispari
    if(n1 % 2 != 0){
        if(n2 == 'dispari'){
            document.write('Giocatore hai vinto perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero dispari' + ' ' + n3);
        } else{
            document.write('Hai perso perchè la somma fra il tuo numero' + ' ' + sceltaN + ' ' + 'e il numero scelto dal pc' + ' ' + sceltaPc + ' ' + ' è un numero dispari' + ' ' + n3);
        }
    }
}



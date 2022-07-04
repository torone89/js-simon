
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")


// Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Recupero dove stampare i numeri da ricordare a mente nel DOM

let numeri = document.getElementById('numerimente')
console.log(numeri)

// // Recupero la classe d-none
// const Dnone = document.querySelector('display')
// console.log(Dnone)

// Mi creo una funzione per generare 5 numeri casuali da 1 a 100 e li aggiungo
function getRandomnumber(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
};

let numerimente = [];
const indicenumeri = 5

for (let i = 1; i <= indicenumeri; i++) {


    // Controllo 
    if (numerimente.includes(getRandomnumber(1, 100))) { i-- }
    else { numerimente.push(getRandomnumber(1, 100)) }

    console.log(numerimente)
    numeri.innerText = numerimente

}

// // SOLUZIONE WHILE
// while (numerimente.length <= 5) {
//     let randomNumber = getRandomnumber(1, 100);
//     if (!numerimente.includes(randomNumber)) {
//         numerimente.push(randomNumber);
//     }
// }

// Mi creo un ContDown che parte da 30 secondi e decresci di un secondo fino allo 0
let secondi = 5
const contoAllaRovescia = setInterval(function () {
    --secondi
    if (secondi === 0) {
        clearInterval(contoAllaRovescia)
        // Aggiungo la classe display none
        numeri.classList.add('display');

    }
    console.log(contoAllaRovescia)
}, 1000)


// Mi Creo un array per chiedere un utente un numero 

const indovina = [];

// Imposto un prompt che chieda all'utente i numeri visti precedentemente a 0.2s
const comandoprompt = setTimeout(function () {

    // Creo un ciclo in base all'indice dei numeri che precedentemnte ho viusalizzato
    for (let i = 1; i <= indicenumeri; i++) {
        let indovinaNumero
        do {
            indovinaNumero = parseInt(prompt("Inserisci i numeri che ti ricordi di quelli che hai visualizzato"))
        } while (isNaN(indovinaNumero)) // Verifica che sia un valore "numero" e non stringa

        // Inserisco il numero nell'array Indovina
        indovina.push(indovinaNumero);
    }
    console.log("I numeri che ho scelto: " + indovina);
}, secondi * 1000 + 200);
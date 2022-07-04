
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
for (let i = 1; i <= 5; i++) {

    numerimente.push(getRandomnumber(1, 100))
    console.log(getRandomnumber(1, 100))
    numeri.innerText = numerimente + " "
}


let secondi = 30
const contoAllaRovescia = setInterval(function () {
    --secondi
    if (secondi === 0) {
        clearInterval(contoAllaRovescia)
        numeri.classList.add('display');
    }
    console.log(contoAllaRovescia)
}, 1000)
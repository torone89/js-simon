
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

    // Stabilisco se posso inserire numeri doppi
    let numericasuali = 0

    do {
        numericasuali = getRandomnumber(1, 100);
    } while (numerimente.includes(numericasuali));

    numerimente.push(getRandomnumber(1, 100))
    console.log(numerimente)
    numeri.innerText = numerimente + " "
}

// Mi creo un ContDown che parte da 30 secondi e decresci di un secondo fino allo 0
let secondi = 5
const contoAllaRovescia = setInterval(function () {
    --secondi
    if (secondi === 0) {
        clearInterval(contoAllaRovescia)
        // Aggiungo la classe display none
        numeri.classList.add('display');

        for (let i = 1; i <= 5; i++) {

            prompt(alert("Inserisci il numero  che ti ricordi"))


        }


    }
    console.log(contoAllaRovescia)
}, 1000)
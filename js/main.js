// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

// 1. chiedere all'utente il numero di chilometri che vuole percorrere
const km = Number(prompt("Inserisci i km da percorrere"));
// 2. chiedere all'utente la sua età
const age = Number(prompt("Inserisci la tua età"));
// SE i km e l'eta sono dei numeri
if( !isNaN(km) && !isNaN(age) ) {
    // 3. calcolo il prezzo totale del biglietto (prezzo intero)
    let ticketPrice = km * 0.21;
    // 4. SE l'eta dell'utente è < 18 allora applico il 20% di sconto
    //    ALTRIMENTI SE l'età dell'utente è >= 65 allora applico il 40% di sconto
    if( age < 18 ) {
        // calcolo lo sconto del 20%
        // ticketPrice = ticketPrice - sconto;
        ticketPrice -= ticketPrice * 0.2;
    } else if( age >= 65 ) {
        // calcolo lo sconto del 40%
        // ticketPrice = ticketPrice - sconto;
        ticketPrice -= ticketPrice * 0.4;
    }
    // 5. stampiamo il risultato sulla pagina
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è: ${ticketPrice.toFixed(2)}€`;
    console.log(`Il prezzo del biglietto è: ${ticketPrice.toFixed(2)}€`);
} else {
    alert("I dati inseriti non sono corretti, ricarica la pagina!");
}
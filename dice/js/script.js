// Imposto il bottone
const rollBtn = document.getElementById('roll-btn');

// Associo il lancio dei dadi al click al click
rollBtn.addEventListener('click',
    () => {
        // Genero il risultato dei due dadi
        const userDice = Math.floor(Math.random() * 6) + 1;
        const pcDice = Math.floor(Math.random() * 6) + 1;

        // Creo la variabile relativa al messaggio dell'esito
        let message;

        // Comparo i risultati e constato se c'è un pareggio o un vincitore
        if( userDice === pcDice ) {
            message = 'Avete pareggiato. Provate ancora!'
        } else if( userDice > pcDice ) {
            message = 'Complimenti! Hai vinto!'
        } else {
            message = 'Mi dispiace, hai perso!'
        }

        // Imposto i due dadi
        let userResult = document.getElementById('user-dice');
        let pcResult = document.getElementById('pc-dice');
        
        // Resetto il lancio precedente
        userResult.innerHTML = '';
        pcResult.innerHTML = '';

        // Creo un punto del dado
        const diceDot  = `<div class="dice-dot"></div> `

        // Inserisco i punti in base al risultato nei dadi 
        for( let a = 1; a <= userDice; a++) {
            userResult.innerHTML += diceDot
        }

        for( let b = 1; b <= pcDice; b++) {
            pcResult.innerHTML += diceDot
        }  

        // Stampo nel DOM il vincitore
        document.getElementById('result').innerHTML = message;
    }
)



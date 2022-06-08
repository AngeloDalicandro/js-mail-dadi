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

        document.getElementById('result').innerHTML = message;

    }
)



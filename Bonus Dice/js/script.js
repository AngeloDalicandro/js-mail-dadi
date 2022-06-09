// Imposto il bottone
const rollBtn = document.getElementById('roll-btn');

// Creo un array per salvare i risultati
// let array = [];

// Associo il lancio dei dadi al click al click
rollBtn.addEventListener('click',
    () => {
        // Genero il risultato dei due dadi
        const userDice = Math.floor(Math.random() * 6) + 1;
        const pcDice = Math.floor(Math.random() * 6) + 1;

        let userFaceSelector;
        let pcFaceSelector;

        // Resetto il display block
        for( i = 1; i <= 6; i++) {
            userFaceSelector = document.getElementById( `user-${i}` );
            pcFaceSelector = document.getElementById( `pc-${i}` );
            userFaceSelector.style.display = 'none'; 
            pcFaceSelector.style.display = 'none';
        }

        // Creo la variabile relativa al messaggio dell'esito
        let message;

        // Comparo i risultati e constato se c'è un pareggio o un vincitore
        if( userDice === pcDice ) {
            message = 'Avete pareggiato. Provate ancora!';
        } else if( userDice > pcDice ) {
            message = 'Complimenti! Hai vinto!';
        } else {
            message = 'Mi dispiace, hai perso!';
        }

        // Seleziono la faccia del dado
        userFaceSelector = document.getElementById( `user-${userDice}` );
        pcFaceSelector = document.getElementById( `pc-${pcDice}` );

        // Assegno la classe alle immagini selezionate
        userFaceSelector.style.display = 'block';
        pcFaceSelector.style.display = 'block';

        // Stampo nel DOM il vincitore
        document.getElementById('result').innerHTML = message;
    }
)




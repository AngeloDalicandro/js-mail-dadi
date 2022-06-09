// Imposto il bottone
const rollBtn = document.getElementById('roll-btn');

// Creo un array per salvare i risultati
let array = [];

// Associo il lancio dei dadi al click al click
rollBtn.addEventListener('click',
    () => {
        // Genero il risultato dei due dadi
        const userDice = Math.floor(Math.random() * 6) + 1;
        const pcDice = Math.floor(Math.random() * 6) + 1;

        let userFaceSelector;
        let pcFaceSelector;

        if(array != false) {
            // Seleziono le facce dei dadi
            userFaceSelector = document.getElementById( `user-${array[0]}` );
            pcFaceSelector = document.getElementById( `pc-${array[1]}` );

            // Resetto la faccia del lancio precedente
            userFaceSelector.classList.remove('active');
            pcFaceSelector.classList.remove('active');
        }   else {
            // Genero la variabile della faccia dei dadi
            userFaceSelector = document.getElementById( `user-${userDice}` );
            pcFaceSelector = document.getElementById( `pc-${pcDice}` );
        }

        // Resetto l'array    
        array = []
        console.log(array)
        //Salvo i risultati
        array.push(userDice, pcDice);
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

        // Assegno la classe alle immagini selezionate
        userFaceSelector.classList.add('active');
        pcFaceSelector.classList.add('active');

        // Stampo nel DOM il vincitore
        document.getElementById('result').innerHTML = message;
    }
)




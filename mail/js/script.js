// Costruisco un array con email ipotetiche di utenti
const emails = ['angelo@gmail.com', 'boolean@live.it', 'classe66@hotmail.it', 'google@gmail.com', 'nonso@gmail.com', 'alanturing@pc.uk', 'esempio@gmail.com', 'compileris@alwaysright.com', 'lastexample@iguess.fr'];

// Creo la variabile da associare al tasto login
const loginBtn = document.getElementById('login-button');

// Imposto il valore 'false' a una variabile per verificare 
// se l'email dell'utente è presente nell'array
let emailFound = false;

// Creo un evento riferito al click sul bottone
loginBtn.addEventListener('click',
    () => {
        // Registro l'email inserita dall'utente
        const userEmail = document.getElementById('user-email').value

        // Controllo singolarmente gli elementi nell'array per verificare 
        // che la mail inserita dall'utente sia presente
        for (let i = 0; i < emails.length; i++) {
            const thisEmail = emails[i];

            console.log(thisEmail)

            if( thisEmail === userEmail ) {
                emailFound = true;
            }
        }

        // Imposto un messaggio diverso in base all'esito del confronto precedente
        let userMessage;

        if( emailFound === true ) {
            userMessage =  ` Benvenuto, ${userEmail}! `;
        } else {
            userMessage = 'Ci dispiace, la mail inserita non è corretta. Controlla di nuovo o registrati al sito.';
        }

        // Stampo il messaggio
        document.getElementById('result').innerHTML = userMessage;
    }
)


//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore in base a chi fa il punteggio più alto

//genera numero random per giocatore

var numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(numeroGiocatore);


//genera numero random per computer

var numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);

//valuta punteggio piu alto

var messaggio;

if(numeroGiocatore > numeroComputer){
    messaggio = 'Bravo, hai vinto!';
}else if(numeroGiocatore < numeroComputer){
    messaggio = 'Peccato, ritenta!';
}else{
    messaggio = 'pari!';
}

//stampa messaggio

alert(messaggio);


//MAIL

//Chiedi all’utente la sua email
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo

//Chiedere mail all' utente (stringa)
var mailUtente = prompt('Inserisci la tua mail');
//console.log(mailUtente);

//Crea lista di mail a cui è consentito l' accesso
var arrayMail = ['ciao','nico.berrettoni@gmail.com', 'marco.rossi@outlook.com', 'pinco.pallo@gmail.com', 'beatrice.bianchi@hotmail.it', 'chiara.tini@gmail.com'];
//console.log(arrayMail);

//logica sul controllo d'accesso

var mailInserita = false;

for ( var i = 0; i < arrayMail.length; i++){
    var thisMail = arrayMail[i];

    if(thisMail == mailUtente){
        mailInserita = true;
        console.log(mailInserita);
    }
}

//Stampa messaggio appropriato in base a esito controllo

if(mailInserita = true){
    alert('Mail trovata!');
}else{
    alert('Mail non trovata!');
}

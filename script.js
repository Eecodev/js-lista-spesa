/*
* MILESTONE 1 - CREAZIONE DI UNA LISTA DELLA SPESA
* - Chiediamo (prompt) all'utente i prodotti da acquistare e mettiamoli da qualche parte (dove?)
* - Continuiamo a chiedere prodotti fino a quando l'utente non inserisce "stop"

* MILESTONE 2 - STAMPA DELLA LISTA DELLA SPESA
* Data la lista della spesa creata in precedenza, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
*/


let list = [];
let item = '';

while(item !== 'stop'){
    item = prompt('Aggiungi alla lista');

    if( item !== 'stop' && item !== ''){
        list.push(item);
    }

    console.log(item);
}

console.log(list);

const listEl = document.getElementById('list');
const listItemEl = document.createElement('li');

for ( i = 0; i < list.length; i++) {
    const listItemEl = document.createElement('li');
    listItemEl.innerHTML = list[i];
    listEl.appendChild(listItemEl);
}
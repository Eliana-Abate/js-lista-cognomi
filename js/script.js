/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/ 


var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(surnameList);

var username;


do {
    userSurname = prompt('Inserisci il tuo cognome');  
} while (!userSurname);

console.log(userSurname);

if (userSurname) {
    surnameList.push(userSurname);
}

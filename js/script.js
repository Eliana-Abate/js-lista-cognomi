/*Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/ 


var surnameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var userSurname;


do {
    userSurname = prompt('Inserisci il tuo cognome');  
} while (!userSurname || userSurname.trim() === '');

userSurname = userSurname.trim();
userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1).toLowerCase();


if (userSurname) {
    surnameList.push(userSurname);
}

surnameList.sort();
console.log(surnameList);

console.log(surnameList.indexOf(userSurname) +1);

var display = document.getElementById('people-list');
display.innerHTML = surnameList;







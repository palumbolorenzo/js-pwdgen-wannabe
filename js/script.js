let nome = prompt('Qual è il tuo nome?');
let nomeUser = nome;
document.getElementById('name').innerHTML = nomeUser;
console.log(nomeUser);

let cognome = prompt('Qual è il tuo cognome?');
let cognomeUser = cognome;
document.getElementById('surname').innerHTML = cognomeUser;
console.log(cognomeUser);

let colore = prompt('Qual è il tuo colore preferito?');
let coloreUser = colore;
document.getElementById('color').innerHTML = coloreUser;
console.log(coloreUser);

document.getElementById('result').innerHTML = nome + cognome + colore + `22`;

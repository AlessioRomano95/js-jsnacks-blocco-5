console.log('js ok')

const lettere = ['a', 'b', 'c'];
const numeri = [1, 2, 3];
const unione = somma(lettere, numeri);
console.log(unione);


function somma( lettere, numeri ) {
  let risultato = [];
  for (let i = 0; i < Math.min(lettere.length, numeri.length); i++) {
      risultato.push(lettere[i], numeri[i]);
  }
  return risultato.concat(lettere.slice(numeri.length), numeri.slice(lettere.length));
}


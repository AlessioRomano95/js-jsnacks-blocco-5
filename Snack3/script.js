console.log('js ok')

function girareStringa(parola) {
  return parola.split('').reverse().join('');
}

const parolaOriginale = 'supercalifragilistichespiralidoso';
const parolaGirata = girareStringa(parolaOriginale);
console.log(parolaGirata);
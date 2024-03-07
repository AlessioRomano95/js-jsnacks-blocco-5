console.log('js ok')

// Snack 1

const zucchine = [
  {
    varietà: 'siciliana',
    peso: 1.5,
    lunghezza: 20
  },
  {
    varietà: 'bianca triestina',
    peso: 0.8,
    lunghezza: 10
  },
  {
    varietà: 'tondo di piacenza',
    peso: 1,
    lunghezza: 5
  },
  {
    varietà: 'trombetta di albenga',
    peso: 1.1,
    lunghezza: 30
  },
  {
    varietà: 'patisson',
    peso: 0.5,
    lunghezza: 25
  },
  {
    varietà: 'giallo',
    peso: 3,
    lunghezza: 18
  },
  {
    varietà: 'giallo rugoso friulano',
    peso: 2,
    lunghezza: 9
  },
  {
    varietà: 'crookneck',
    peso: 1,
    lunghezza: 40
  },
  {
    varietà: 'tondo di nizza',
    peso: 1.8,
    lunghezza: 13
  },
  {
    varietà: 'striata di napoli',
    peso: 1.1,
    lunghezza: 9
  },
];

let sommaPesoCorte = 0;
let sommaPesoLunghe = 0;

zucchine.forEach(function(zucchina) {
    if (zucchina.lunghezza < 15) {
        sommaPesoCorte += zucchina.peso;
    } else {
        sommaPesoLunghe += zucchina.peso;
    }
});

console.log("Peso delle zucchine corte:", sommaPesoCorte);
console.log("Peso delle zucchine lunghe:", sommaPesoLunghe);

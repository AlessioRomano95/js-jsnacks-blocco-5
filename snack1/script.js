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
    lunghezza: 15
  },
  {
    varietà: 'striata di napoli',
    peso: 1.1,
    lunghezza: 9
  },
]

let sommaTotale = 0;

zucchine.forEach(function(somma) {
  sommaTotale += somma.peso;
});

console.log("Il peso totale delle zucchine è:", sommaTotale);
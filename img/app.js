const fs = require('fs');
const request = require('request');
for (let i = 1; i <= 151; i++) {
  request('https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + i + '.png').pipe(fs.createWriteStream('./img/pokemon/' + i + '.png'))
}
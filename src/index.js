var countries = require('./countries.json');
var getRandomCountry = () => choice(countries);

function choice(arr) {
  var randomId = Math.floor(Math.random() * arr.length)
  
  return arr[randomId]
}

function random(number) {
  if (number === undefined) {
    return getRandomCountry()
  } else {
    var randomItems = []
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomCountry())
    }
    return randomItems;
  }
}

module.exports = {
  all: countries,
  choice: random
}
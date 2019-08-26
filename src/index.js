var countries = require('./countries.json');

function choice(arr) {
  var randomId = Math.floor(Math.random() * arr.length)
  
  return arr[randomId]
}

module.exports = {
  all: countries,
  choice: choice(countries) 
}
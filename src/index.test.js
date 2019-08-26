var expect = require('chai').expect;
var whereToGo = require('./index');

describe('where to go', () => {
  describe('all method', () => {
    it('should be array of objects', () => {
      expect(whereToGo.all).to.satisfy(isArrayOfObjects);

      function isArrayOfObjects(array) {
        return array.every(i => typeof i === 'object');
      }
    })
  })
  
  describe('random method', () => {
    it('should return random item from the all method', () => {
      var randomItem = whereToGo.choice()
      expect(whereToGo.all).to.include(randomItem)
    })

    it('should return array of random countries if number passed', () => {
      var randomItems = whereToGo.choice(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach(i => {
        expect(whereToGo.all).to.include(i)
      })
    })
  })
})

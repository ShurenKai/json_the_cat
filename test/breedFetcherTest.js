const chai = require('chai');
const assert = chai.assert;

const { fetchBreedDescription } = require('../breedFetcher');

describe('#fetchBreedDescription()', () => {
  it('should return null if given not a cat', (done) => {
    fetchBreedDescription('Maru', (err, desc) => {
      assert.equal(desc, null);
      assert.equal(err, null);
      done();
    });
  });

  it('should return undefined if given a random character', (done) => {
    fetchBreedDescription('@', (err, desc) => {
      assert.equal(desc, null);
      assert.equal(err, null);
      done();
    });
  });

  it('should return undefined when given a number', (done) => {
    fetchBreedDescription(5, (err, desc) => {
      assert.equal(desc, null);
      assert.equal(err, null);
      done();
    });
  });

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
});
const request = require('request');
const catBreeds = {
  URL: 'https://api.thecatapi.com/v1/breeds/search',
  port: 443,
};
let breed = process.argv[2];

// const printMessage = (desc) => {
//   console.log(desc[0].description);
// };

const fetchBreedDescription = (breed, callback) => {
  request(catBreeds.URL  + '?q=' + breed, (err, response, body) => {
    const desc = JSON.parse(body);
    if (desc.length) {
      callback(null, desc[0].description);
    } else {
      callback(err, null);
    }
  });
};

module.exports = { fetchBreedDescription };
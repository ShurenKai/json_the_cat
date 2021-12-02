const request = require('request');
let args = process.argv.splice(2, process.argv.length - 1);
let breed = args[0];
const catBreeds = {
  URL: 'https://api.thecatapi.com/v1/breeds/search',
  port: 443,
};

request(catBreeds.URL  + '?q=' + breed, (err, response, body) => {
  if (err) {
    throw new Error('cat not found');
  } else {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log('breed information not found');
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  }
});
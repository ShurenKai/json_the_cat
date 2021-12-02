const request = require('request');
let args = process.argv.splice(2, process.argv.length - 1);
let breed = args[0];
const catBreeds = {
  URL: 'https://api.thecatapi.com/v1/images/search' + '?q=' + breed,
  port: 443,
};


const printBreed = () => {
  const newCat = catBreeds.URL;
  console.log(newCat);
};

request(catBreeds.URL, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    printBreed();
  }
});
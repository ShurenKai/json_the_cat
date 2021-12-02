const {fetchBreedDescription} = require("./breedFetcher");
let breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

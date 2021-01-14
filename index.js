// index.js

const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv[2].toLowerCase().slice(0, 4);

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    console.log(description);
  }
});

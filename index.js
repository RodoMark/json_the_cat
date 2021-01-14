// index.js

const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv[2].toLowerCase().slice(0, 4);

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    if (description === undefined) {
      console.log("We don't have info on that breed");
    } else if (description.length < 1) {
      console.log("You searched for a breed that didn't exist");
    } else {
      console.log(description);
    }
  }
});

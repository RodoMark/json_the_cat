"use strict";

const request = require("request");

// 'https://api.thecatapi.com/v1/breeds/search?q=sibe'

const fetchBreedDescription = function (breedName, callback) {
  const searchQuery =
    "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(searchQuery, (error, description, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      // If improper breed they'll get no data empty array
      if (data === []) {
        let errorString = "You searched for a breed that doesn't exist";
        console.log(errorString);
        callback(null, errorString);
      } else {
        if (data.length > 1 && data[0].description === undefined) {
          let errorString = `We don't have a description for this breed`;
          callback(null, errorString);
        } else callback(null, data[0].description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription,
};

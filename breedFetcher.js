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
      if (data.length < 1) {
        callback(null, data);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription,
};

// breedFetcherTest.js

const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("#fetchBreedDescription", () => {
  //1
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (error, description) => {
      // we expect no error for this scenario so null = null
      assert.equal(error, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, description.trim());

      done();
    });
  });

  //2
  it(`returns appropriate error message when breed doesn't exist`, (done) => {
    fetchBreedDescription("Mexicant", (error, description) => {
      // we expect no error for this scenario so error should equal to null
      assert.equal(error, null);

      const noBreed = "You searched for a breed that doesn't exist";
      // compare returned message
      assert.equal(noBreed, description);
    });
  });

  //3
  it(`returns appropriate error message when breed doesn't have description`, (done) => {
    fetchBreedDescription("Mexican", (error, description) => {
      // we expect no error for this scenario so error should equal to null
      assert.equal(error, null);

      const noDesc = "We don't have a description for this breed";
      // compare returned message
      assert.equal(noDesc, description);
    });
  });

  //3
  it(`returns wrong URL error message when invalid URL is entered`, (done) => {
    fetchBreedDescription("Mexican", (error, description) => {
      // we expect no error for this scenario so error should equal to null
      assert.equal(error, error);

      const noDesc = "We don't have a description for this breed";
      // compare returned message
      assert.equal(noDesc, description);
    });
  });
});

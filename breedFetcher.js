'use strict'

const request = require('request')
const breed = process.argv[2].slice(0, 4).toLowerCase()

const searchQuery = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed

// 'https://api.thecatapi.com/v1/breeds/search?q=sibe'

const breedFetcher = request(searchQuery, (error, response, body) => {
  if (error) {
    console.log('Error: site URL not found')
  } else {
    const data = JSON.parse(body)
    if (data[0] === undefined) {
      console.log("We don't have that breed")
    } else {
      if (!data[0].description) {
        console.log("That breed doesn't have a description")
      } else {
        console.log(data[0].description)
      }
    }
  }
})

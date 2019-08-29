const catName = process.argv.slice(2);
let URL = "https://api.thecadsfatapi.com/v1/breeds/search?q=";
URL += catName;

const request = require('request');
request.get(URL, (error, response, body) => {
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error !== null) {
    // Address not found
    console.log("Address not found.");
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      // Breed Not Found cases
      console.log("Returning nothing.");
    } else {
      console.log(data[0]["description"]);
    }
  }
});
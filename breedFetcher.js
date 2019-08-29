const fetchBreedDescription = function(breedName, callback) {
  let URL = "https://api.thecatapi.com/v1/breeds/search?q=";
  URL += breedName;
  const request = require('request');
  request.get(URL, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error !== null) {
      // Address not found
      // console.log("Address not found.");
      callback("Address nothing.", null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        // Breed Not Found cases
        // console.log("Returning nothing.");
        callback("Returning nothing.", null);
      }
      // The demand input
      else {
        // console.log(data[0]["description"]);
        callback(null, data[0]["description"]);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
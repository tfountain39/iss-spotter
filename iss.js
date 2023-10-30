// iss.js - Logic for fetching data from API
const database = require("mime-db");
const request = require('request');

// Main request function
const fetchMyIP = function(callback) {
  const url = `https://ipwho.is/`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // Error catch for reading JSON data.
    try {
      const data = JSON.parse(body);
      if (!data.latitude || !data.longitude) {
        return callback(`Invalid IP data, missing latitude or longitude`, null);
      }

      // Assign found variables to variables
      const coordinates = {
        latitude: data.latitude,
        longitude: data.longitude
      };
      // Send found coords back to call back
      callback(null, coordinates);
      // Catch JSON parse errors and send to callback
    } catch (parseError) {
      callback(`Error parsing JSON response`, null);
    }
  });
};
// Function export
module.exports = { fetchMyIP };
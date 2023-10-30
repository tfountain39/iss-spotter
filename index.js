// index.js - Will require and run our main fetch function

const { fetchMyIP } = require('./iss');

// User side returns based on success
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
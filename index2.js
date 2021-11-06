const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./printPassTimes');


// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body))
//   .catch((error) => {
//     console.log(`It didn't work! ${error}`)
//   })

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  // .then((body) => {
  //   console.log('It worked! Returned IP:' , body);
  //   return fetchCoordsByIP(body);
  // })
  // .then((coordinatesBody) => {
  //   console.log('It worked! Returned Coordinates:', coordinatesBody);
  // })

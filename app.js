const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (location !== undefined) {
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    // if invalid input, destructuring has TypeError
    if (error) {
      return console.log(error);
    }
    // console.log("Data: ", data);
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
} else {
  console.log("Please enter a location!");
}

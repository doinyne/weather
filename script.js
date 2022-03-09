let weather = {
  "apiKey": "7c8d356661b9b4ca223b3d608f00359a",
  fetchWeather: function(city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=metric&appid=" 
      + this.apiKey)
    .then((response) => response.json())
    .then((data) => console.log(data));
  },
  displayWeather: function(data) {

  }
};

// api working now
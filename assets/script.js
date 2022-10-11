// fetch api
let openWeatherUrl =''
let getWeather = function (city) { 
    //fetch request
    fetch(openWeatherUrl)
    // request current city and wait for response
    .then(function(response) {
        return response.json()
    })
    .then(function(data))
 }
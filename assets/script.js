// fetch api

let openWeatherApi =`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=8186b94874b53d57d238ea86e82b51e2`

fetch(openWeatherApi)
.then(response => response.json())
.then(data => console.log(data))

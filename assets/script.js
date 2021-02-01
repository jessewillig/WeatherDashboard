function init () {
    currentWeather();
};

function currentWeather () {
    var userInput = $("input").val();
    console.log(userInput);
    
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;
    
    $.ajax({
        url: weatherUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#today").append(cityTag);
        // current city name
        var currentCity = response.name;
        var cityTag = $("<h1>").text(currentCity);
        $("#today").append(cityTag);
        // current temperature
        var currentTemp = response.main.temp;
        var temperatureTag = $("<h5>").text("Temperature: " + currentTemp);
        $("#today").append(temperatureTag);
        console.log(currentTemp);
        // wind speed
        var currentWind = response.wind.speed;
        var windTag = $("<h5>").text("Wind Speed: " + currentWind);
        $("#today").append(windTag);
        // humidity
        var currentHumidity = response.main.humidity;
        var humidityTag = $("<h5>").text("Humidity: " + currentHumidity);
    });
};

// function for forcast
function forcast () {
    var userInput = $("input").val();
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;

    $.ajax({
        url: weatherUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
    })
};
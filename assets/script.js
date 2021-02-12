var cities = [];

function init() {
    currentWeather();
    forecast();
};

function currentWeather(cityName) {
    var userInput = $("input").val();
    console.log(userInput);

    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;

    $.ajax({
        url: weatherUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // var card = $("<div>").addClass("card");               
        // var cardBody = $("<div>").addClass("card-body");
        $("#today").empty();
        $("#today").append(cityTag);
        console.log(cityTag);
        // current city name
        var currentCity = response.name;
        var cityTag = $("<h2>").text(currentCity);
        $("#today").append(cityTag);
        console.log(cityTag);
        // current temperature
        var currentTemp = response.main.temp;
        var temperatureTag = $("<h5>").text("Temperature: " + currentTemp + "° F");
        $("#today").append(temperatureTag);
        console.log(currentTemp);
        // wind speed
        var currentWind = response.wind.speed;
        var windTag = $("<h5>").text("Wind Speed: " + currentWind + " MPH");
        $("#today").append(windTag);
        // humidity
        var currentHumidity = response.main.humidity;
        var humidityTag = $("<h5>").text("Humidity: " + currentHumidity + "%");
        $("#today").append(humidityTag);
        // uv index
        // var currentUVindex = response.main.uvIndex;
        // var uvTag = $("<h5>").text("UV Index: " + currentUVindex);
        // $("#today").append(uvTag);
        uvIndex(response.coord.lat, response.coord.lon);
    });
};

function uvIndex(lat, lon) {
    var uvUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;

    $.ajax({
        url: uvUrl,
        method: "GET",
        dataType: "json",
        success: function(response) {
            var btn = $("<span>").addClass("btn btn-sm").text(response.value);
            var uvIndex = $("<p>").text("UV Index: ");
                    // Set color depending on uv index value
        if (response.value < 3) {
            btn.addClass("btn-success");
        } else if (response.value < 7) {
            btn.addClass("btn-caution");
        }
        else {
            btn.addClass("btn-danger");
        }

        $("#today").append(uvIndex.append(btn));
    },
    // bodyEl.appendChild(uvIndexEl);
    // uvIndexEl.appendChild(buttonEl);
    });
};

// function for forcast
function forecast(cityName) {

    var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;

    $.ajax({
        url: weatherUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // $("#forecast").empty();
        // forcast day 1 of 5, date, temp, humidity
        var day1 = $("#day1").text("Date: " + response.list[0].dt_txt);
        $("#day1").append(day1);

        var temperature1 = $(".currentTemperature1").text("Temperature: " + response.list[0].main.temp + "° F");
        $(".currentTemperature1").append(temperature1);

        var humidity1 = $(".currentHumidity1").text("Humidity: " + response.list[0].main.humidity + "%");
        $(".currentHumidity1").append(humidity1);

        // forcast day 2 of 5, date, temp, humidity
        var day2 = $("#day2").text("Date: " + response.list[9].dt_txt);
        $("#day2").append(day2);

        var temperature2 = $(".currentTemperature2").text("Temperature: " + response.list[9].main.temp + "° F");
        $(".currentTemperature2").append(temperature2);

        var humidity2 = $(".currentHumidity2").text("Humidity: " + response.list[9].main.humidity + "%");
        $(".currentHumidity2").append(humidity2);

        // forcast day 3 of 5, date, temp, humidity
        var day3 = $("#day3").text("Date: " + response.list[17].dt_txt);
        $("#day3").append(day3);

        var temperature3 = $(".currentTemperature3").text("Temperature: " + response.list[17].main.temp + "° F");
        $(".currentTemperature3").append(temperature3);

        var humidity3 = $(".currentHumidity3").text("Humidity: " + response.list[17].main.humidity + "%");
        $(".currentHumidity3").append(humidity3);

        // forcast day 4 of 5, date, temp, humidity
        var day4 = $("#day4").text("Date: " + response.list[25].dt_txt);
        $("#day4").append(day4);

        var temperature4 = $(".currentTemperature4").text("Temperature: " + response.list[25].main.temp + "° F");
        $(".currentTemperature4").append(temperature4);

        var humidity4 = $(".currentHumidity4").text("Humidity: " + response.list[25].main.humidity + "%");
        $(".currentHumidity4").append(humidity4);

        // forcast day 5 of 5, date, temp, humidity
        var day5 = $("#day5").text("Date: " + response.list[33].dt_txt);
        $("#day5").append(day5);

        var temperature5 = $(".currentTemperature5").text("Temperature: " + response.list[33].main.temp + "° F");
        $(".currentTemperature5").append(temperature5);

        var humidity5 = $(".currentHumidity5").text("Humidity: " + response.list[33].main.humidity + "%");
        $(".currentHumidity5").append(humidity5);

        // ajax inside ajax for symbol
        var symbolUrl = "https://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + ".png"

        $.ajax({
            url: symbolUrl,
            method: "GET"
        }).then(function (response1) {
            console.log(response);
            $(".symbol1").empty()
            // add image tag with symbol from API to all 5 cards
            var newImg1 = $(`<img src="${symbolUrl}">`);
            $(".symbol1").append(newImg1);
            symbolUrl = "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png"
            var newImg2 = $(`<img src="${symbolUrl}">`);
            $(".symbol2").empty()
            $(".symbol2").append(newImg2);
            symbolUrl = "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png"
            var newImg3 = $(`<img src="${symbolUrl}">`);
            $(".symbol3").empty()
            $(".symbol3").append(newImg3);
            symbolUrl = "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png"
            var newImg4 = $(`<img src="${symbolUrl}">`);
            $(".symbol4").empty()
            $(".symbol4").append(newImg4);
            symbolUrl = "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png"
            var newImg5 = $(`<img src="${symbolUrl}">`);
            $(".symbol5").empty()
            $(".symbol5").append(newImg5);
        });
    });
};

// push user input city to array
function pushCities() {
    var userInput = $("input").val();
    cities.push(userInput)
    // console.log("test" + cities);
    storeCities();
    getCities();
};


// store user input city to local storage
function storeCities() {
    localStorage.setItem('cities', JSON.stringify(cities));
};

// get cities from local storage
function getCities() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));
    if (storedCities !== null) {
        cities = storedCities;
    }
    createBtn();
};

// create new button when user searches for city
function createBtn(event) {
    // $("#today").empty();
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        var newBtn = $("<button>").text(city);
        $("button").addClass("newSearch");
        $(".history").append(newBtn);
        $(newBtn).click(function searchHistory(event) {
            var city = $(this).text();
            console.log(city);
            forecast(city);
            currentWeather(city);
            // localStorage.removeItem(currentWeather);
        });
    };
};

getCities();

// on.click event for search button
$("#search-button").on("click", function (event) {
    var userInput = $("input").val();
    event.preventDefault();
    forecast(userInput);
    currentWeather(userInput);
    pushCities();
    $("input").val("");
});

// on.submit for form input
$("form").on("submit", function (event) {
    event.preventDefault();
    forecast();
    currentWeather();
    pushCities();
    $("input").val("");
});
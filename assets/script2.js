var cities = [];

// on.click even for search button
$(document).ready(function () {
    $("#search-button").on("click", function () {
        var searchValue = $("#searchList").val();
        // clear input box
        $("#searchList").val("");
        currentWeather(searchValue);
    });
    $(".history").on("click", "li", function () {
        currentWeather($(this).text());
    });

    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
    };
    
    function init() {
        currentWeather();
    };
    
    function currentWeather(searchValue) {
        var userInput = $("input").val();
        console.log(userInput);
    
        var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;
    
        $.ajax({
            url: weatherUrl,
            method: "GET",
            dataType: "json",
            success: function (data) {
                if (history.indexOf(searchValue) === -1) {
                    history.pushState(searchValue);
                    window.localStorage.setItem("history", JSON.stringify(history));
    
                    makeRow(searchValue);
                };
            }
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
});


// function for forcast
function forcast() {
    var userInput = $("input").val();
    var weatherUrl = `api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`;

    $.ajax({
        url: weatherUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // forcast day 1 of 5, date, temp, humidity
        var day1 = $("#day1").text("Date: " + response.list[0].dt_txt);
        $("#day1").append(day1);

        var temperature1 = $(".currentTemperature1").text("Temperature: " + response.list[0].main.temp);
        $(".currentTemperature1").append(temperature1);

        var humidity1 = $(".currentHumidity1").text("Humidity: " + response.list[0].main.humidity);
        $(".currentHumidity1").append(humidity1);

        // forcast day 2 of 5, date, temp, humidity
        var day2 = $("#day2").text("Date: " + response.list[9].dt_txt);
        $("#day2").append(day2);

        var temperature2 = $(".currentTemperature2").text("Temperature: " + response.list[9].main.temp);
        $(".currentTemperature2").append(temperature2);

        var humidity2 = $(".currentHumidity2").text("Humidity: " + response.list[9].main.humidity);
        $(".currentHumidity2").append(humidity2);

        // forcast day 3 of 5, date, temp, humidity
        var day3 = $("#day3").text("Date: " + response.list[17].dt_txt);
        $("#day3").append(day3);

        var temperature3 = $(".currentTemperature3").text("Temperature: " + response.list[17].main.temp);
        $(".currentTemperature3").append(temperature3);

        var humidity3 = $(".currentHumidity3").text("Humidity: " + response.list[17].main.humidity);
        $(".currentHumidity3").append(humidity3);

        // forcast day 4 of 5, date, temp, humidity
        var day4 = $("#day4").text("Date: " + response.list[25].dt_txt);
        $("#day4").append(day4);

        var temperature4 = $(".currentTemperature4").text("Temperature: " + response.list[25].main.temp);
        $(".currentTemperature4").append(temperature4);

        var humidity4 = $(".currentHumidity4").text("Humidity: " + response.list[25].main.humidity);
        $(".currentHumidity4").append(humidity4);

        // forcast day 5 of 5, date, temp, humidity
        var day5 = $("#day5").text("Date: " + response.list[33].dt_txt);
        $("#day5").append(day5);

        var temperature5 = $(".currentTemperature5").text("Temperature: " + response.list[33].main.temp);
        $(".currentTemperature5").append(temperature5);

        var humidity5 = $(".currentHumidity5").text("Humidity: " + response.list[33].main.humidity);
        $(".currentHumidity5").append(humidity5);
    });
};

// // push user input city to array
// function pushCities() {
//     var userInput = $("input").val();
//     cities.push(userInput)
//     // console.log("test" + cities);
//     storeCities();
//     getCities();
// };

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
    $(".searchList").empty();
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];
        var newBtn = $("<button>").text(city);
        $("button").addClass("newSearch");
        $(".searchList").append(newBtn);
    };
};

getCities();

// // on.click event for search button
// $("#search-button").on("click", function (event) {
//     event.preventDefault();
//     forecast();
//     currentWeather();
//     pushCities();
//     $("input").val("");
// });

// // on.submit for form input
// $("form").on("submit", function (event) {
//     // console.log("consider me searched");
//     // console.log($(this).prev().val());
//     event.preventDefault();
//     forecast();
//     currentWeather();
//     pushCities();
//     $("input").val("");
// });
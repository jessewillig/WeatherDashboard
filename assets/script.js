function init () {
    currentWeather();
};

function currentWeather () {
    var userInput = $("input").val();
    console.log(userInput);
    
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=imperial&appid=9af1f8786adac9fdc9f8dfe42ab5e0e5`
    
    $.ajax({
        url: weatherUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
};
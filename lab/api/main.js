console.log('hello world')
// Insert your actual API request URL below
fetch('http://api.openweathermap.org/data/2.5/weather?zip=11221&APPID=9659ba6936e9213d9237ada9e40243b5&units=imperial')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);
 //the info is json so apply code
    });

// RENDER FUNCTION SETUP
var tempSpan = document.querySelector('.temp')
var windSpeedSpan = document.querySelector('.wind-speed')
var windDirSpan = document.querySelector('.wind-dir')
var weatherVaneWrapper = document.querySelector('.weather-vane-wrapper')
var weatherVane = document.querySelector('.weather-vane')



function render(data) {

    // LOG THE DATA IN ITS ENTIRETY
    console.log(data);

    // LOG THE CURRENT TEMPERATURE
    console.log(data.main.temp);

    // INSERT THE TEMPERATURE
    tempSpan.innerText = data.main.temp

    // INSERT THE WIND SPEED
    windSpeedSpan.innerText = data.wind.speed

      // INSERT THE WIND DIRECTION
    windDirSpan.innerText = data.wind.deg

    // SET BACKGROUND COLOR BASED ON TEMPERATURE
    document.body.style.backgroundColor = 'hsl(' + data.wind.deg + ',50%,50%)'

    // ROTATE WEATHER VANE BASED ON WIND DIRECTION
    weatherVaneWrapper.style.transform = 'rotate(' + data.wind.deg + 'deg)'

    // SET ANIMATION DURATION OF WEATHERVANE BASED ON WIND SPEED
    weatherVane.style.animationDuration = 5 / data.wind.speed + 's'
}

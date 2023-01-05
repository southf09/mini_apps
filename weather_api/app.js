const express = require('express');
const https = require('https');
const app = express();

//This function used the openweathermap API to generate data based on specified location. It then writes the data to the root location ('/') at localhost:3000

app.get('/', function(req, res){
    const apiKey = yourKeyHere;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=35.7803977&lon=-78.6390989&appid=${apiKey}&units=imperial`;

    https.get(url, function(response){
        console.log(response.statusCode);
        
        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`

            res.write(`<h3>The weather is currently ${description}.</h3>`);
            res.write(`<h1>The temperature in Raleigh is ${temp} degrees fahrenheiht.</h1>`);
            res.write(`<img src="${iconURL}" alt="" />`)
            res.send();
        });
    });
})
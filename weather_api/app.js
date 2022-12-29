const express = require('express');
const https = require('https');
const app = express();

app.get('/', function(req, res){
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.7803977&lon=-78.6390989&appid=7df43b813165f5a75e08251bb0dd7994&units=imperial';
    https.get(url, function(response){
        console.log(response.statusCode);
    });

    res.send('Server is up and running.');
})







app.listen(3000, function() {
    console.log('Server is running on port 3000.');
})
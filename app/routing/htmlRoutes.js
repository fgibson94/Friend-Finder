var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

module.exports = function(app) {
    
    // A GET Route to /survey which should display the survey page.
    app.get('/survey', function (req, res) {
        console.log("going to survey")
            res.sendFile(path.join(__dirname, '../public/survey.html'))
        });
    
    // A default, catch-all route that leads to home.html which displays the home page.
    app.get('/', function (req, res) {
        console.log("going to Home.html")
        res.sendFile(path.join(__dirname, '../public/home.html'))
        });
    }

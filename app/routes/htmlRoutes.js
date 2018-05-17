var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app) {
    app.get('/pets', function (req, res) {
        res.render('pets', {});
    });
    
    app.get('/people', function (req, res) {
        res.render('people', {});
    });
};
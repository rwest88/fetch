var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var currentUser = require('../config/currentUser.js');

module.exports = function (app) {
  app.get('/api/currentUser', function (req, res) {
    res.send(currentUser.getCurrentUser());
  });
};
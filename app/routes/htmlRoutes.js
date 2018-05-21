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

  app.get('/profile/pet/:id', function (req, res) {
    res.render('profile', {
      human: false,
      id: req.params.id
    });
  });

  app.get('/profile/user/:id', function (req, res) {
    res.render('profile', {
      human: true,
      id: req.params.id
    });
  });
};
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, db, bodyParser, authCheckService, User) {
    app.get('/pets', authCheckService.isAuthenticated, function (req, res) {
        res.render('pets', {});
    });
    
    app.get('/people', authCheckService.isAuthenticated, function (req, res) {
        res.render('people', {});
    });

    app.get('/profile/pet/:id', authCheckService.isAuthenticated, function (req, res) {
        res.render('profile', {human: false, id: req.params.id});
    });

    app.get('/profile/user/:id', authCheckService.isAuthenticated, function (req, res) {
        res.render('profile', {human: true, id: req.params.id});
    });
};
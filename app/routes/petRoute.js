const db = require('../models');
const bodyParser = require("body-parser");
var authCheckService = require('../services/authCheckService.js');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());    

    app.get('/api/pet', authCheckService.isAuthenticated, (req, res) => {
        db.Pet.findAll({}).then(function (pets) {
            res.send(pets);
        }); 
    });    
};
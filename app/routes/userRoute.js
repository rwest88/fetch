const db = require('../models');
const bodyParser = require("body-parser");
const authCheckService = require('../services/authCheckService.js');

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());    

    app.get('/api/user', authCheckService.isAuthenticated, (req, res) => {
        db.User.findAll({}).then(function (users) {
            res.send(users);
        }); 
    });    
};
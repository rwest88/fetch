const db = require('../models');
const bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());    

    app.get('/api/user', (req, res) => {
        db.User.findAll({}).then(function (users) {
            res.send(users);
        }); 
    });    
};
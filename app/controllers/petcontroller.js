const db = require('../models');
const bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());    

    app.get('/api/pet', (req, res) => {
        db.Pet.findAll({}).then(function (pets) {
            res.send(pets);
        }); 
    });    
};
module.exports = function (app, db, bodyParser, authCheckService) {
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
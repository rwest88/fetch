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
    
    app.get('/api/user/pet/:petId', 
        authCheckService.isAuthenticated, 
        (req, res) => {

        db.User.findAll({
            where: {
                id: req.params.petId 
            }  
        }).then(function (user) {
            res.send(user);
        });
    });
};
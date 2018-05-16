module.exports = function (app, db, bodyParser, authCheckService) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.use(bodyParser.json());    

    app.get('/api/engagement', authCheckService.isAuthenticated, (req, res) => {
        db.Engagement.findAll({}).then(function (engagements) {
            res.send(engagements);
        }); 
    });         
};
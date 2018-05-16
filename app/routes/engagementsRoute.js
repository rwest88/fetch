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
    
    app.post('/api/engagement/pet/:PetId/user/:UserId', 
        authCheckService.isAuthenticated, (req, res) => {
        
        var newEngagement = {
            date: req.body.date,
            name: req.body.name,
            address: req.body.address,
            UserId: req.params.UserId,
            PetId: req.params.PetId
        };

        db.Engagement.create(newEngagement).then((response) => {
            res.status(201).send(response);
        }).catch((err) => {
            res.status(500).send('Ooopsie whoopsie: ' + err);
        });
    });

    app.delete('/api/engagement/:engagementId', 
        authCheckService.isAuthenticated, (req, res) => {
        
        var engagementId = req.params.engagementId;            
        
        db.Engagement.destroy({
            where: {
                id: engagementId
            }
        }).then((response) => {
            res.status(204); // 204 == No Content
        }).catch((err) => {
            res.status(500).send('Ooopsie whoopsie: ' + err);
        }); 
    });
};
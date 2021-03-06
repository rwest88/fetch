module.exports = function (app, db, bodyParser, authCheckService) {
    app.get('/api/engagement', authCheckService.isAuthenticated, (req, res) => {
        db.Engagement.findAll({}).then(function (engagements) {
            res.status(200).send(engagements);
        }); 
    });
    
    app.get('/api/engagement/pet/:petId', 
        authCheckService.isAuthenticated, 
        (req, res) => {

        db.Engagement.findAll({
            where: {
                PetId: req.params.petId
            }
        }).then(function (engagements) {
            res.status(200).send(engagements);
        });
    });

    app.get('/api/engagement/:engagementId', 
        authCheckService.isAuthenticated, (req, res) => {
        
        db.Engagement.find({
            where: {
                id: req.params.engagementId
            }
        }).then((response) => {
            res.status(200).send(response);
        }).catch((err) => {
            res.status(500).send('Ooopsie whoopsie: ' + err);
        });    
    });

    app.post('/api/engagement', 
        authCheckService.isAuthenticated, 
        (req, res) => {
        console.log("request"+JSON.stringify(req.body));
        
        var newEngagement = {
            name: req.body.name,
            date: req.body.date,
            address: req.body.address, 
            UserId: req.body.UserId,
            PetId: req.body.PetId
        };

        db.Engagement.create(newEngagement).then((engagementResponse) => {
            res.status(201).send(engagementResponse);
        }).catch((err) => {
            res.status(500).send('Ooopsie whoopsie ' + err);
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
            res.status(204); // 204 == Success with no content
        }).catch((err) => {
            res.status(500).send('Ooopsie whoopsie: ' + err);
        }); 
    });

    app.put('/api/engagement/:engagementId/pet/:PetId/user/:UserId', 
        authCheckService.isAuthenticated, (putReq, putRes) => {

        var updatedEngagement = {
            date: putReq.body.date,
            name: putReq.body.name,
            address: putReq.body.address,
            UserId: putReq.body.UserId,
            PetId: putReq.body.PetId
        };
        
        db.Engagement.update(updatedEngagement, {
            where: { id: putReq.params.engagementId }
        }).then((response) => {
            putRes.status(200).send(response); 
        }).catch((err) => {
            putRes.status(500).send('Ooopsie whoopsie: ' + err);
        });    
    });    
};
var exports = module.exports = {}

exports.signup = function (req, res){
	res.render('signup'); 
};

exports.signin = function (req, res){
	res.render('signin'); 
};

exports.dashboard = function (req, res){
	res.render('dashboard'); 
};

exports.people = function (req, res) {
  res.render('people');
};

exports.pets = function (req, res) {
  res.render('pets');
};

exports.index = function (req, res) {
  res.sendFile('index')
};

exports.logout = function(req, res){
  req.session.destroy(function(err) {
    res.redirect('/');
  });
};
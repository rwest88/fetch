var express          = require('express')
var app              = express()
var passport         = require('passport')
var session          = require('express-session')
var bodyParser       = require('body-parser')
var env              = require('dotenv').load()
var exphbs           = require('express-handlebars')
var path             = require('path');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');    

app.get('/', function(req, res){
  console.log('endpoint hit!');
  res.sendFile(path.join(__dirname + '/index.html'));
});

var db = require("./app/models");

var authCheckService = require('./app/services/authCheckService.js');

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);

//load passport strategies
require('./app/config/passport/passport.js')(passport, db.User);

// rest routes
require('./app/routes/userRoute.js')(app, db, bodyParser, authCheckService);
require('./app/routes/petRoute.js')(app, db, bodyParser, authCheckService);
require('./app/routes/engagementsRoute.js')(app, db, bodyParser, authCheckService);

//Sync Database
db.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine');
}).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!");
});

app.listen(5000, function(err){
  if(!err)
    console.log("Site is live"); else console.log(err)
});
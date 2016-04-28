var express = require('express');
var app = express();
var mongoose = require('mongoose');
//var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var connectionString = 'mongodb://localhost/cd5610';
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var passport      = require('passport');

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);



app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(session({
    secret: "this is the secret",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//app.use(cors());
//
//app.get('http://www.supermarketapi.com/api.asmx/SearchByProductName?APIKEY=0d5bc661c9&ItemName=:lays', function(req, res, next){
//    res.json({msg: 'This is CORS-enabled for all origins!'});
//});
//
//app.listen(3000, function(){
//    console.log('CORS-enabled web server listening on port 80');
//});

var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://www.supermarketapi.com'}));

app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;




require("./public/assignment/server/app.js")(app, db, mongoose, passport);
require("./public/project/server/app.js")(app, db, mongoose, passport);


app.listen(port,ipaddress);
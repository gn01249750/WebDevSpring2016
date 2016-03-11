var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public/experiment/server'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;



var courses = [
    {title: "java 101", seats: 23, start: new Date()},
    {title: "java 201", seats: 11, start: new Date()},
    {title: "java 301", seats: 2, start: new Date()}

];

app.get("/rest/course", function(req, res)
{
    res.send(courses);
});

app.post("/rest/course", function(req, res)
{
    var course = req.body;
    console.log(course);
    courses.push(course);
    res.json(courses);
});

app.delete("/rest/course/:id", function(req, res)
{
    var index = req.params["id"];
    courses.splice(index,1);
    res.send(courses);
});

app.get("/rest/course/:id", function(req, res)
{
    var index = req.params["id"];
    res.send(courses[index]);
});

app.listen(port,ipaddress);
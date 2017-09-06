
var express = require("express");
var app     = express();
var path    = require("path");
const login = require('../functions/login')
const signup = require('../functions/signup')


app.use(express.static('gallery'))
app.use(express.static('events/radar'))
app.use(express.static('ourTeam'))
app.use(express.static('loginSignup'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index/homepage.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/events',function(req,res){
  res.sendFile(path.join(__dirname+'/events/radar/events.html'));
});

app.get('/register',function(req,res){
  res.sendFile(path.join(__dirname+'/loginSignup/register.html'));
});

app.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname+'/gallery/galleryFinal.html'));
});
app.get('/ourTeam',function(req,res){
  res.sendFile(path.join(__dirname+'/ourTeam/ourTeam.html'));
});

app.get('/lectureSeries',function(req,res){
  res.sendFile(path.join(__dirname+'/ourTeam/lectureSeries.html'));
});

app.get('/hourGlass',function(req,res){
  res.sendFile(path.join(__dirname+'/ourTeam/hourGlass.html'));
});

app.listen(3000);

console.log("Running at Port 3000");

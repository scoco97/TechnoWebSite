const app = require('./express')
const con = require('./db');

const login = require('./functions/login')
const signup = require('./functions/signup')

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index/homepage.html'));
});

app.get('/register',function(req,res){
  res.sendFile(path.join(__dirname + '/public/loginSignup/register.html'));
});

app.get('/ourTeam', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/ourTeam/ourTeam.html'));
});

app.get('/lectures',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/lectureSeriesedit.html'));
});

app.get('/technophilia',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/technophilia.html'));
});

app.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname + '/public/gallery/gallery.html'));
});

app.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/events/radar/events.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

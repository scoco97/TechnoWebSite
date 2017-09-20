const app = require('./express')
const con = require('./db');
const path = require('path');
const login = require('./functions/login')
const signup = require('./functions/signup')



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/homepage/homepage.html'));
});

app.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/events/radar/events.html'));
});



// AQUA
app.get('/aqua-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/aqua-register.html'));
});
app.post('/aqua-register',(req,res)=>{
    
});



//climb
app.get('/climb-e-rope-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/climb-e-rope.html'));
});
app.post('/climb-e-rope-register',(req,res)=>{
});




//codeinx
app.get('/codeinx-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeinx-register.html'));
});
app.post('/codeinx-register',(req,res)=>{

});



//coderoyale
app.get('/coderoyale-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/coderoyale-register.html'));
});
app.post('/coderoyale-register',(req,res)=>{

});


//codeswap
app.get('/codeswap-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeswap-register.html'));
});
app.post('/codeswap-register',(req,res)=>{

});


//crypt
app.get('/cryptext-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/cryptext-register.html'));
});
app.post('/cryptext-register',(req,res)=>{

});


//cway
app.get('/cway-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/cway-register.html'));
});
app.post('/cway-register',(req,res)=>{
});



//ic
app.get('/ic-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ic-register.html'));
});
app.post('/ic-register',(req,res)=>{
});



//iot
app.get('/iot-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/iot-register.html'));
});
app.post('/iot-register',(req,res)=>{

});



//javaguru
app.get('/javaguru-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/javaguru-register.html'));
});
app.post('/javaguru-register',(req,res)=>{
});



//maze
app.get('/maze-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/maze-register.html'));
});
app.post('/maze-register',(req,res)=>{
});


//missionsql
app.get('/missionsql-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/missionsql-register.html'));
});
app.post('/missionsql-register',(req,res)=>{
});


//monster
app.get('/monsterarena-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/monsterarena-register.html'));
});
app.post('/monsterarena-register',(req,res)=>{
});



//myst
app.get('/myst-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/myst-register.html'));
});
app.post('/myst-register',(req,res)=>{
});


//robosoccer
app.get('/robosoccer-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosoccer-register.html'));
});
app.post('/robosoccer-register',(req,res)=>{
});


//robosumo
app.get('/robosumo-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosumo-register.html'));
});
app.get('/robosumo-register',(req,res)=>{
});



//robowars
app.get('/robowars-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robowars-register.html'));
});
app.post('/robowars-register',(req,res)=>{
});



//sherlock
app.get('/sherlocked-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/sherlocked-register.html'));
});
app.post('/robowars-register',(req,res)=>{
});



//smartcity
app.get('/smartcity-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/smartcity-register.html'));
});
app.get('/smartcity-register',(req,res)=>{

});



//techno
app.get('/technohunt-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/technohunt-register.html'));
});
app.post('/technohunt-register',(req,res)=>{
});



//ultimate
app.get('/ultimatecoder-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ultimatecoder-register.html'));
});
app.post('/ultimatecoder-register',(req,res)=>{
});


//vrc
app.get('/vrc-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vrc-register.html'));
});
app.post('/vrc-register',(req,res)=>{
});


//vsm
app.get('/vsm-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vsm-register.html'));
});
app.post('/vsm-register',(req,res)=>{
});


app.get('/ourTeam', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/ourTeam/ourTeam.html'));
});

app.get('/lectures',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/lectureSeries.html'));
});

app.get('/competitions',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/competitions.html'));
});

app.get('/technophilia',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/technophilia.html'));
});

app.get('/sponsors',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/sponsors.html'));
});

app.get('/gallery',function(req,res){
  res.sendFile(path.join(__dirname + '/public/gallery/gallery.html'));
});

app.get('/socialInitiatives',function(req,res){
  res.sendFile(path.join(__dirname + '/public/ourTeam/socialInitiatives.html'));
});

app.listen(process.env.PORT||3000, function() {
  console.log('Example app listening on port 3000!')
})

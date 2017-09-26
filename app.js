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
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 


});



//climb
app.get('/climb-e-rope-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/climb-e-rope.html'));
});
app.post('/climb-e-rope-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 


});




//codeinx
app.get('/codeinx-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeinx-register.html'));
});
app.post('/codeinx-register',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});



//coderoyale
app.get('/coderoyale-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/coderoyale-register.html'));
});
app.post('/coderoyale-register',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//codeswap
app.get('/codeswap-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeswap-register.html'));
});
app.post('/codeswap-register',(req,res)=>{
  let leadername = req.body.member_1;
  let leaderemail = req.body.email_1;
  let leadercontact = req.body.contact_1;
  let member2name = req.body.member_2;
  let member3name = req.body.email_2;
  let member4name = req.body.contact_2;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 

});


//crypt
app.get('/cryptext-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/cryptext-register.html'));
});
app.post('/cryptext-register',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//cway
app.get('/cway-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/cway-register.html'));
});
app.post('/cway-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});



//ic
app.get('/ic-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ic-register.html'));
});
app.post('/ic-register',(req,res)=>{
   let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//bdg
app.get('/bridgethegap-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/bridgethegap-register.html'));
});
app.post('/bridgethegap-register',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//iot
app.get('/iot-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/iot-register.html'));
});
app.post('/iot-register',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});



//javaguru
app.get('/javaguru-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/javaguru-register.html'));
});
app.post('/javaguru-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});



//maze
app.get('/maze-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/maze-register.html'));
});
app.post('/maze-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
});


//missionsql
app.get('/missionsql-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/missionsql-register.html'));
});
app.post('/missionsql-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//rcmo
app.get('/rcmo-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/rcmo-register.html'));
});
app.post('/rcmo-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//monster
app.get('/monsterarena-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/monsterarena-register.html'));
});
app.post('/monsterarena-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
});



//myst
app.get('/myst-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/myst-register.html'));
});
app.post('/myst-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//robosoccer
app.get('/robosoccer-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosoccer-register.html'));
});
app.post('/robosoccer-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
});


//robosumo
app.get('/robosumo-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosumo-register.html'));
});
app.post('/robosumo-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

});



//makerssquare
app.get('makerssquare-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosumo-register.html'));
});
app.post('/makerssquare-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

});


//robomaze
app.get('/robomaze-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robomaze-register.html'));
});
app.get('/robomaze-register',(req,res)=>{
let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);  
});

//drone
app.get('/drone-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/drone-register.html'));
});
app.get('/drone-register',(req,res)=>{
    let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
    console.log(req.body);
});



//fastnfurious
app.get('/fastnfurious-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/fastnfurious-register.html'));
});
app.get('/fastnfurious-register',(req,res)=>{
    let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
    console.log(req.body);
});



//robowars
app.get('/robowars-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robowars-register.html'));
});
app.post('/robowars-register',(req,res)=>{
   let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
    console.log(req.body);

});


//tpp
app.get('/tpp-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/tpp-register.html'));
});
app.post('/tpp-register',(req,res)=>{
  let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//sherlock
app.get('/sherlocked-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/sherlocked-register.html'));
});
app.post('/sherlocked-register',(req,res)=>{
  let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});



//smartcity
app.get('/smartcity-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/smartcity-register.html'));
});
app.get('/smartcity-register',(req,res)=>{
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 

});



//techno
app.get('/technohunt-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/technohunt-register.html'));
});
app.post('/technohunt-register',(req,res)=>{
let leadername = req.body.member_1;
  let leaderemail = req.body.email_1;
  let leadercontact = req.body.contact_1;
  let member2name = req.body.member_2;
  let member3name = req.body.email_2;
  let member4name = req.body.contact_2;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);  
});



//ultimate
app.get('/ultimatecoder-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ultimatecoder-register.html'));
});
app.post('/ultimatecoder-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
});


//vrc
app.get('/vrc-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vrc-register.html'));
});
app.post('/vrc-register',(req,res)=>{

  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let member5name = req.body.member_5;
  let member6name = req.body.member_6;
  let collegename = req.body.collegeName;
  let house = req.body.House;
    console.log(req.body);

});


//vsm
app.get('/vsm-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vsm-register.html'));
});
app.post('/vsm-register',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);
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

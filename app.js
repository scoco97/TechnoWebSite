const app = require('./express')
const con = require('./db');
const path = require('path');
const compression = require('compression');
const login = require('./functions/login')
const signup = require('./functions/signup')
const sendData = require('./index_add.js');

<<<<<<< HEAD
app.use(compression());
=======

>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/homepage/homepage.html'));
});

app.get('/events', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/events/radar/events.html'));
});


app.get('/thankyou',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/thankyou.html')); 
    res.end();        
});


// AQUA
app.get('/aqua-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/aqua-register.html'));
});
app.post('/aqua-register',(req,res)=>{
<<<<<<< HEAD
  console.log(req.body); 
  
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
<<<<<<< HEAD
  
  var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(collegename);
  insertData.push(house);

  sendData('AQUA',insertData)
  .then((data)=>{
    if (data == 1) {
      res.redirect('/thankyou');
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
  });
=======
  console.log(req.body); 

>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0

});



//climb
app.get('/climb-e-rope-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/climb-e-rope.html'));
});
app.post('/climb-e-rope-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 


<<<<<<< HEAD
 var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(collegename);
  insertData.push(house);
  
  sendData('CLIMB-E-ROPE',insertData)
  .then((data)=>{
    if (data == 1) {
       res.redirect('/thankyou');
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
  });


=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  insertData.push("codeinX");
  
  sendData('CODE-IN-X',insertData)
  .then((data)=>{
    if (data == 1) {
     res.redirect('/thankyou');
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  sendData('CODEROYALE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});


//codeswap
app.get('/codeswap-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeswap-register.html'));
});
app.post('/codeswap-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
  let leadername = req.body.member_1;
  let leaderemail = req.body.email_1;
  let leadercontact = req.body.contact_1;
  let membername = req.body.member_2;
  let memberemail = req.body.email_2;
  let membercontact = req.body.contact_2;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 

  var insertData= [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(membername);
  insertData.push(memberemail);
  insertData.push(membercontact);
  insertData.push(collegename);
  insertData.push(house);

  sendData('CODESWAP',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });
=======
  let leadername = req.body.member_1;
  let leaderemail = req.body.email_1;
  let leadercontact = req.body.contact_1;
  let member2name = req.body.member_2;
  let member3name = req.body.email_2;
  let member4name = req.body.contact_2;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0

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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  

  sendData('CRYPTEXT',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });


=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  

  sendData('CWAY',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});



//ic
app.get('/ic-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ic-register.html'));
});
app.post('/ic-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData= [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);


  sendData('IC',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  

  sendData('BRIDGETHEGAP',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  sendData('IOT',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  sendData('JAVAGURU',insertData)
  .then((data)=>{
    console.log(data);
    if (data === 1) {
       
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});



//maze
app.get('/maze-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/maze-register.html'));
});
app.post('/maze-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
<<<<<<< HEAD
  console.log(req.body);

  var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member_2);
  insertData.push(member_3);
  insertData.push(member_4);
  insertData.push(collegename);
  insertData.push(house);

  sendData('MAZE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

 
=======
  console.log(req.body); 
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  sendData('MISSION-SQL',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  sendData('RCMO',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});


//monster
app.get('/monsterarena-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/monsterarena-register.html'));
});
app.post('/monsterarena-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
<<<<<<< HEAD


  var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member_2);
  insertData.push(member_3);
  insertData.push(member_4);
  insertData.push(collegename);
  insertData.push(house);

  sendData('MONSTER-ARENA',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });


=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  

  sendData('MYST',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});


//robosoccer
app.get('/robosoccer-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosoccer-register.html'));
});
app.post('/robosoccer-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
<<<<<<< HEAD

  var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(collegename);
  insertData.push(house);


  sendData('ROBOSOCCER',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});


//robosumo
app.get('/robosumo-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosumo-register.html'));
});
app.post('/robosumo-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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

<<<<<<< HEAD
   var insertData= [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);

  sendData('ROBOSUMO',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });


=======
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
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0

});


<<<<<<< HEAD

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



   var insertData= [];
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);


  sendData('MAKERS-SQUARE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

});


=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
//robomaze
app.get('/robomaze-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robomaze-register.html'));
});
app.get('/robomaze-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD


   var insertData= [];
   insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);


  sendData('ROBO-MAZE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});

//drone
app.get('/drone-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/drone-register.html'));
});
app.get('/drone-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
=======
    let leadername = req.body.leader_fullname;
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD


   var insertData= [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);


  sendData('DRONE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});



//fastnfurious
app.get('/fastnfurious-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/fastnfurious-register.html'));
});
app.get('/fastnfurious-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
=======
    let leadername = req.body.leader_fullname;
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD


   var insertData= [];
   insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);


  sendData('FAST-N-FURIOUS',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });


=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});



//robowars
app.get('/robowars-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robowars-register.html'));
});
app.post('/robowars-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
=======
   let leadername = req.body.leader_fullname;
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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

<<<<<<< HEAD

   var insertData= [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);

  sendData('ROBO-WARS',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  sendData('TPP',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  

  sendData('SHERLOCKED',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});



//smartcity
app.get('/smartcity-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/smartcity-register.html'));
});
app.get('/smartcity-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 
<<<<<<< HEAD

  var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member_2);
  insertData.push(member_3);
  insertData.push(member_4);
  insertData.push(collegename);
  insertData.push(house);

  sendData('SMART-CITY',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });
=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0

});



//techno
app.get('/technohunt-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/technohunt-register.html'));
});
app.post('/technohunt-register',(req,res)=>{
let leadername = req.body.member_1;
  let leaderemail = req.body.email_1;
  let leadercontact = req.body.contact_1;
<<<<<<< HEAD
  let membername = req.body.member_2;
  let memberemail = req.body.email_2;
  let membercontact = req.body.contact_2;
  let house = req.body.House;
  let collegename = req.body.collegeName;
  console.log(req.body);  


   var insertData= [];
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(membername);
  insertData.push(memberemail);
  insertData.push(membercontact); 
  insertData.push(collegename);
  insertData.push(house);

  sendData('TECHO-HUNT',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
  let member2name = req.body.member_2;
  let member3name = req.body.email_2;
  let member4name = req.body.contact_2;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);  
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD


   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  

  sendData('ULTIMATE-CODER',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });


=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
});


//vrc
app.get('/vrc-register',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vrc-register.html'));
});
app.post('/vrc-register',(req,res)=>{
<<<<<<< HEAD
  let teamName = req.body.team_name;
=======

>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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

<<<<<<< HEAD

   var insertData= [];
   insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(member4name);
  insertData.push(member5name);
  insertData.push(member6name);
  insertData.push(collegename);
  insertData.push(house);

  sendData('VRC',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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
<<<<<<< HEAD

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);


  sendData('VSM',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

=======
>>>>>>> 1477cd13c0e9ea9e55ec84b09a3e5deb69820db0
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

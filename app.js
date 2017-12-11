const app = require('./express')
const con = require('./db');
const path = require('path');
const compression = require('compression');
const login = require('./functions/login')
const signup = require('./functions/signup')
const sendData = require('./index_add.js');
const transporter = require('./mailer.js');
var nodemailer = require('nodemailer');

var mailer = (mailData) => {
const mailOptions = {
  from: 'yash.jain@technovanza.org', 
  to: mailData.email,
  subject: 'Registration Successful | Technovanza 2017-18',
  html: '<p>Hi ' + mailData.name + ', <br/> Thank You for registering for ' + mailData.eventName +'.<br/> Your Registration was successful. <br/>Kindly keep this mail as proof for your registration. <br/> Thank You, Wish you have a great time at Technovanza 2017-18 during 26th-28th December, 2017. <br/><br/>Regards, <br/>Team Technovanza 2017-18</p>'
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
}


app.use(compression());
app.get('/ca', function(req,res){
  res.redirect('https://www.ca.technovanza.org/index.php')
});

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
app.get('/aqua',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/aqua-register.html'));
});
app.post('/aqua',(req,res)=>{
  console.log(req.body); 
  
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  let caCode = req.body.caCode;
  
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
  insertData.push(caCode);


  sendData('AQUA',insertData)
  .then((data)=>{
    if (data == 1) {
      res.redirect('/thankyou');
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Aqua Battle Front'
  };
  mailer(mailData);

});



//climb
app.get('/climb-e-rope',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/climb-e-rope.html'));
});
app.post('/climb-e-rope',(req,res)=>{
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 


 var insertData = [];
  insertData.push(teamName);
  insertData.push(leadername);
  insertData.push(leaderemail);
  insertData.push(leadercontact);
  insertData.push(member2name);
  insertData.push(member3name);
  insertData.push(collegename);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);
  
  sendData('CLIMB-E-ROPE',insertData)
  .then((data)=>{
    if (data == 1) {
       res.redirect('/thankyou');
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Climb-E-Rope'
  };
  mailer(mailData);
});




//codeinx
app.get('/codeinx',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeinx-register.html'));
});

app.post('/codeinx',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  insertData.push("codeinX");

    let caCode = req.body.caCode;
  insertData.push(caCode);
  
  sendData('CODE-IN-X',insertData)
  .then((data)=>{
    if (data == 1) {
     res.redirect('/thankyou');
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
  });

    var mailData = {
    name : name,
    email : email,
    eventName : 'Code-In-X'
  };
  mailer(mailData);

});



//coderoyale
app.get('/coderoyale',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/coderoyale-register.html'));
});
app.post('/coderoyale',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
    let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('CODEROYALE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'CodeRoyale'
  };
  mailer(mailData);
});


//codeswap
app.get('/codeswap',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/codeswap-register.html'));
});
app.post('/codeswap',(req,res)=>{
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('CODESWAP',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'CodeSwap'
  };
  mailer(mailData);
});


//crypt
app.get('/cryptext',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/cryptext-register.html'));
});
app.post('/cryptext',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);  

  sendData('CRYPTEXT',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Cryptext'
  };
  mailer(mailData);

});


//cway
app.get('/cway',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/cway-register.html'));
});
app.post('/cway',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('CWAY',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'C-Way'
  };
  mailer(mailData);
});



//ic
app.get('/ic',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ic-register.html'));
});
app.post('/ic',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('IC',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Fast & Furious'
  };
  mailer(mailData);
});


//bdg
app.get('/bridgethegap',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/bridgethegap-register.html'));
});
app.post('/bridgethegap',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('BRIDGETHEGAP',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Bridge The Gap'
  };
  mailer(mailData);
});


//iot
app.get('/iot',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/iot-register.html'));
});
app.post('/iot',(req,res)=>{
 let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let branchName = req.body.branchName;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  let ca = req.body.caCode;
  console.log(req.body);

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(branchName);
  insertData.push(collegeName);
  insertData.push(house);
  insertData.push(ca);
  
  sendData('IOT',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'IOT'
  };
  mailer(mailData);
});



//javaguru
app.get('/javaguru',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/javaguru-register.html'));
});
app.post('/javaguru',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('JAVAGURU',insertData)
  .then((data)=>{
    console.log(data);
    if (data === 1) {
      res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

    var mailData = {
    name : name,
    email : email,
    eventName : 'JavaGuru'
  };
  mailer(mailData);
});



//maze
app.get('/maze',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/maze-register.html'));
});
app.post('/maze',(req,res)=>{
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('MAZE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });
  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Robomaze'
  };
  mailer(mailData);
 
});


//missionsql
app.get('/missionsql',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/missionsql-register.html'));
});
app.post('/missionsql',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('MISSION-SQL',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });
    var mailData = {
    name : name,
    email : email,
    eventName : 'Mission Sql'
  };
  mailer(mailData);
});


//rcmo
app.get('/rcmo',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/rcmo-register.html'));
});
app.post('/rcmo',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('RCMO',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'RCMO'
  };
  mailer(mailData);
});


//monster
app.get('/monsterarena',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/monsterarena-register.html'));
});
app.post('/monsterarena',(req,res)=>{
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 


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

  let caCode = req.body.caCode;
  insertData.push(caCode);


  sendData('MONSTER-ARENA',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Monster Arena'
  };
  mailer(mailData);
});



//myst
app.get('/myst',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/myst-register.html'));
});
app.post('/myst',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('MYST',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Myst'
  };
  mailer(mailData);
});


//robosoccer
app.get('/robosoccer',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosoccer-register.html'));
});
app.post('/robosoccer',(req,res)=>{
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 

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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('ROBOSOCCER',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Robo-Soccer'
  };
  mailer(mailData);
});


//robosumo
app.get('/robosumo',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robosumo-register.html'));
});
app.post('/robosumo',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('ROBOSUMO',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Robo-Sumo'
  };
  mailer(mailData);

});



//makerssquare
app.get('/makerssquare',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/makerssquare-register.html'));
});

app.post('/makerssquare',(req,res)=>{
  let teamName = req.body.teamName;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('MAKERS-SQUARE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Makers Square'
  };
  mailer(mailData);
});


//robomaze
app.get('/robomaze',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robomaze-register.html'));
});
app.post('/robomaze',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('ROBO-MAZE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Robo-Maze'
  };
  mailer(mailData);
});

//drone
app.get('/drone',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/drone-register.html'));
});
app.post('/drone',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('DRONE',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Drone'
  };
  mailer(mailData);
});



//fastnfurious
app.get('/fastnfurious',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/fastnfurious-register.html'));
});
app.post('/fastnfurious',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('FAST-N-FURIOUS',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Fast-N-Furious'
  };
  mailer(mailData);
});



//robowars
app.get('/robowars',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/robowars-register.html'));
});
app.post('/robowars',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('ROBO-WARS',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'RoboWars'
  };
  mailer(mailData);
});


//tpp
app.get('/tpp',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/tpp-register.html'));
});
app.post('/tpp',(req,res)=>{
  let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('TPP',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Technical Paper Presentation'
  };
  mailer(mailData);
});


//sherlock
app.get('/sherlocked',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/sherlocked-register.html'));
});
app.post('/sherlocked',(req,res)=>{
  let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('SHERLOCKED',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Sherlocked'
  };
  mailer(mailData);
});


//trimble-bim-challenge
app.get('/trimble-bim-contest',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/trimble-bim-contest-register.html'));
});
app.post('/trimble-bim-contest',(req,res)=>{
  let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('TRIMBLE-BIM-CONTEST',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Trimble-Bim-Contest'
  };
  mailer(mailData);
});

//smartcity
app.get('/smartcity',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/smartcity-register.html'));
});
app.post('/smartcity',(req,res)=>{
  let teamName = req.body.team_name;
  let leadername = req.body.leader_fullname;
  let leaderemail = req.body.email;
  let leadercontact = req.body.contact;
  let member2name = req.body.member_2;
  let member3name = req.body.member_3;
  let member4name = req.body.member_4;
  let collegename = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body); 

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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('SMART-CITY',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'Smart City'
  };
  mailer(mailData);
});



//techno
app.get('/technohunt',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/technohunt-register.html'));
});
app.post('/technohunt',(req,res)=>{
  let teamName = req.body.team_name;
let leadername = req.body.member_1;
  let leaderemail = req.body.email_1;
  let leadercontact = req.body.contact_1;
  let membername = req.body.member_2;
  let memberemail = req.body.email_2;
  let membercontact = req.body.contact_2;
  let house = req.body.House;
  let collegename = req.body.collegeName;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('TECHO-HUNT',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'TechnoHunt'
  };
  mailer(mailData);
});



//ultimate
app.get('/ultimatecoder',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/ultimatecoder-register.html'));
});
app.post('/ultimatecoder',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);


   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('ULTIMATE-CODER',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Ultimate Coder'
  };
  mailer(mailData);
});


//vrc
app.get('/vrc',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vrc-register.html'));
});
app.post('/vrc',(req,res)=>{
  let teamName = req.body.team_name;
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

  let caCode = req.body.caCode;
  insertData.push(caCode);

  sendData('VRC',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : leadername,
    email : leaderemail,
    eventName : 'VRC'
  };
  mailer(mailData);
});


//vsm
app.get('/vsm',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/vsm-register.html'));
});
app.post('/vsm',(req,res)=>{
   let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let house = req.body.House;
  console.log(req.body);

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);
  
  sendData('VSM',insertData)
  .then((data)=>{
    if (data == 1) {
        res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
    }
  }).catch((error)=>{
      console.error(error);
  });

  var mailData = {
    name : name,
    email : email,
    eventName : 'Virtual Stock Market'
  };
  mailer(mailData);
});


app.get('/ourTeam', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/ourTeam/ourTeam.html'));
});

app.get('/hackathons', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/ourTeam/hackathons.html'));
});

app.get('/workshops', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/ourTeam/workshops.html'));
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


// EVENT PROBLEM STATEMENTS
app.get('/VRC_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/VRC 2017_Draft-1.pdf'));
});

app.get('/Robosumo_DRAFT_2',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/RoboSumo 2017_Draft-2.pdf'));
});

app.get('/Robosoccer_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Robosoccer 2017_Draft-1.pdf'));
});

app.get('/Robomaze_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Robomaze 2017_Draft-1.pdf'));
});

app.get('/MonsterArena_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Monster Arena 2017_Draft-1.pdf'));
});

app.get('/Fast-N-Furious_DRAFT_2',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Fast N Furious 2017_Draft-2.pdf'));
});

app.get('/Climb-E-Rope_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Climb-E-Rope 2017_Draft-1.pdf'));
});

app.get('/Aqua_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Aqua Battlefront 2017_Draft-1.pdf'));
}); 

app.get('/Robowars_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/RoboWars 2017_Draft-1.pdf'));
});


app.get('/SmartCity_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/SmartCity 2017_Draft-1.pdf'));
});

app.get('/MakersSquare_DRAFT_2',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Makers Square 2017_Draft-2.pdf'));
});

app.get('/TPP_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/TPP 2017_Draft-1.pdf'));
});

app.get('/strykerTechnicalChallenge',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Stryker Technical Challenge - Problem Statement.pdf'));
});

app.get('/C-Way-problem-statement',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Cway 2017.pdf'));
});

app.get('/Codeswap-problem-statement',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Code Swap 2017.pdf'));
});

app.get('/Javaguru-problem-statement',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/JavaGuru 2017.pdf'));
});

app.get('/Mission-Sql-problem-statement',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Mission Sql 2017.pdf'));
});

app.get('/Technohunt-problem-statement',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Technohunt 2017.pdf'));
});

app.get('/Ultimate-Coder-problem-statement',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Ultimate Coder 2017.pdf'));
});

app.get('/DroneRacing_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Drone 2017_Draft-1.pdf'));
});


app.get('/Trimble-Bim-Contest_DRAFT_1',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/Trimble-Bim-Contest 2017_Draft-1.pdf'));
});
app.listen(process.env.PORT||3000, function() {
  console.log('Example app listening on port 3000!')
})

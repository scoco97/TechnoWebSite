const app = require('./express')
const con = require('./db');
const path = require('path');
const request = require('request');
const nodemailer = require('nodemailer');
const compression = require('compression');
const sendData = require('./functions/index_add.js');
const getData = require('./functions/index_get.js');
const getPointsData = require('./functions/points_get.js');
const sendPointsData = require('./functions/points_add.js');
const transporter = require('./functions/mailer.js');
const otpGenerator = require('otp-generator');
const sendSms = require('./functions/smsGenerator');
app.use(compression());

let housePoints = [
{index:0,name:'aqua',points:250},
{index:1,name:'climb-e-rope',points:150},
{index:2,name:'code-in-x',points:0},
{index:3,name:'coderoyale',points:0},
{index:4,name:'codeswap',points:10},
{index:5,name:'cryptext',points:0},
{index:6,name:'cway',points:5},
{index:7,name:'drone',points:0},
{index:8,name:'fast-n-furious',points:0},
{index:9,name:'iot',points:0},
{index:10,name:'javaguru',points:5},
{index:11,name:'makers-square',points:1000},
{index:12,name:'mission-sql',points:10},
{index:13,name:'monster-arena',points:250},
{index:14,name:'myst',points:0},
{index:15,name:'rcmo',points:0},
{index:16,name:'robo-maze',points:150},
{index:17,name:'robosoccer',points:150},
{index:18,name:'robosumo',points:350},
{index:19,name:'robo-wars',points:0},
{index:20,name:'sherlocked',points:15},
{index:21,name:'smart-city',points:150},
{index:23,name:'techno-hunt',points:5},
{index:24,name:'tpp',points:0},
{index:25,name:'trimble-bim-contest',points:0},
{index:26,name:'ultimate-coder',points:15},
{index:27,name:'vrc',points:350},
{index:28,name:'vsm',points:0}
];

let collegePoints = [
{index:0,name:'aqua',points:150},
{index:1,name:'climb-e-rope',points:30},
{index:2,name:'code-in-x',points:0},
{index:3,name:'coderoyale',points:35},
{index:4,name:'codeswap',points:40},
{index:5,name:'cryptext',points:20},
{index:6,name:'cway',points:50},
{index:7,name:'drone',points:1000},
{index:8,name:'fast-n-furious',points:700},
{index:9,name:'iot',points:30},
{index:10,name:'javaguru',points:50},
{index:11,name:'makers-square',points:300},
{index:12,name:'mission-sql',points:35},
{index:13,name:'monster-arena',points:150},
{index:14,name:'myst',points:0},
{index:15,name:'rcmo',points:700},
{index:16,name:'robo-maze',points:70},
{index:17,name:'robosoccer',points:100},
{index:18,name:'robosumo',points:200},
{index:19,name:'robo-wars',points:1800},
{index:20,name:'sherlocked',points:50},
{index:21,name:'smart-city',points:100},
{index:23,name:'techno-hunt',points:50},
{index:24,name:'tpp',points:150},
{index:25,name:'trimble-bim-contest',points:150},
{index:26,name:'ultimate-coder',points:250},
{index:27,name:'vrc',points:700},
{index:28,name:'vsm',points:35}
];

const generateCode = ()=>{
  let otp = otpGenerator.generate(5, { alphabets: false ,upperCase: false, specialChars: false });
  //console.log("OTP GENERATED : " + otp);
  return otp;
};

var mailer = (mailData) => {
  let mailOptions = {};
if(mailData.eventName == 'Guest Lecture Series'){
  mailOptions = {
  from: 'yash.jain@technovanza.org', 
  to: mailData.email,
  subject: 'Registration Successful | Technovanza 2017-18',
  html: '<p>Hi ' + mailData.name + ', <br/> Thank You for ' + mailData.eventName +' registration.<br/> Your Registration was successful. Wish you have a great time at Technovanza 2017-18 during 26th-28th December, 2017. <br/><br/>Regards, <br/>Team Technovanza 2017-18</p>'
};
}else{
  mailOptions = {
  from: 'yash.jain@technovanza.org', 
  to: mailData.email,
  subject: 'Registration Successful | Technovanza 2017-18',
  html: '<p>Hi ' + mailData.name + ', <br/> Thank You for registering for ' + mailData.eventName +'.<br/> Your Registration was successful. <br/><br/> Your unique code is ' + mailData.otp +'. <br/>Wish you have a great time at Technovanza 2017-18 during 26th-28th December, 2017. <br/><br/>Regards, <br/>Team Technovanza 2017-18</p>'
};
}

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
}
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

app.post('/committeeApp',(req, res)=>{

  console.log("Request arrived " + JSON.stringify(req.body));
  let eventName = req.body.name;
  let type = req.body.type;
  let sheetName = null;
  let otp = null;
  let collegeCode = null;
  let pointsToAdd = null;

  if(type == 1){
    otp = req.body.otp;
    sheetName = "HOUSE-CUP";
  }
  else if(type == 2){
    otp = req.body.otp;
    collegeCode = req.body.collegeCode;
    sheetName = "COLLEGE-CUP";
  }

  if(sheetName == "HOUSE-CUP"){
    eventsData = housePoints;
  }else if(sheetName == "COLLEGE-CUP"){
    eventsData = collegePoints;
  }

  for(var i = 0; i < eventsData.length; i++ ){
    var temp = eventsData[i];
    if(temp.name == eventName){
      pointsToAdd = temp.points;
    }
  }

  //getting data from Events Sheet
  getData(eventName.toUpperCase(),otp)
  .then((data)=>{
      //console.log("Data retrieved from Events sheet successfully : " + data);
      if(data[0] == 'none'){
        data[0] = collegeCode;
      }else if(data[0] != 'none' && collegeCode!=null){
        res.sendStatus(250); //PLEASE SELECT PROPER TYPE OF COLLEGE
        res.end();
      }
      console.log("Data from Events Sheet :" + data);
  //getting data from Points Sheet
      return getPointsData(sheetName, data[0]);
  }).catch((error)=>{
      console.error("Getting Data From Events Sheet Error " + error);
      res.sendStatus(210); //DATA IN EVENTS REG. SHEET DOESN'T EXIST
      res.end();
  }).then((result)=>{
        //console.log("Data retrieved from Points sheet successfully : " + JSON.stringify(result));        
  //updating data in Points Sheet
        let dataToPointsSheet = [];
        let updatedParticipants = parseInt(result.row[1]) + 1;
        let updatedPoints = parseInt(result.row[2]) + pointsToAdd; 
            dataToPointsSheet.push(updatedParticipants);
            dataToPointsSheet.push(updatedPoints);

        let dataToPointsSheetObj = {};
            dataToPointsSheetObj.index = result.index;
            dataToPointsSheetObj.updatedrow = dataToPointsSheet;
        //console.log("Data to Points Sheet : "+ JSON.stringify(dataToPointsSheetObj));
        return sendPointsData(sheetName,dataToPointsSheetObj)

  }).catch((error)=>{
      console.error("Updating Data To Points Sheet Error " + error);
      res.sendStatus(220); //PLEASE ENTER PROPER OTP AND COLLEGE CODE
      res.end();
  }).then((data)=>{
    if (data == 1) {
      //console.log("Data entered in Points sheet successfully");
      res.sendStatus(200); //SUCCESS
      res.end();
    }
    else{
      res.sendStatus(230); //COULD NOT UPDATE POINTS SHEET
      res.end();
    }
  }).catch((error)=>{
      console.error(error);
      res.sendStatus(240); //GENERAL CATCH
      res.end();
  });
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
  let otpGenerated = generateCode();
  
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
  insertData.push(otpGenerated);


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
    eventName : 'Aqua Battle Front',
    otp : otpGenerated
  };
  mailer(mailData);

var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Aqua Battle Front',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);
  
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
    eventName : 'Climb-E-Rope',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Climb-E-Rope',
    otp : otpGenerated
  }
  sendSms(smsData);
});




// //codeinx
// app.get('/codeinx',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/public/register/codeinx-register.html'));
// });

// app.post('/codeinx',(req,res)=>{
//  let name = req.body.fullname;
//   let email = req.body.email;
//   let contact = req.body.contact;
//   let collegeName = req.body.collegeName;
//   let house = req.body.House;
//   console.log(req.body);

//    var insertData = [];
//   insertData.push(name);
//   insertData.push(email);
//   insertData.push(contact);
//   insertData.push(collegeName);
//   insertData.push(house);
//   insertData.push("codeinX");

//     let caCode = req.body.caCode;
//   insertData.push(caCode);
  
//   sendData('CODE-IN-X',insertData)
//   .then((data)=>{
//     if (data == 1) {
//      res.redirect('/thankyou');
//       res.end();
//     }
//   }).catch((error)=>{
//       console.error(error);
//   });

//     var mailData = {
//     name : name,
//     email : email,
//     eventName : 'Code-In-X'
//   };
//   mailer(mailData);

// });



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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
    let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'CodeRoyale',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'CodeRoyale',
    otp : otpGenerated
  }
  sendSms(smsData);

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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);


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
    eventName : 'CodeSwap',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'CodeSwap',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);  
  insertData.push(otpGenerated);

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
    eventName : 'Cryptext',
    otp : otpGenerated
  };
  mailer(mailData);

var smsData = {
    name : name,
    contact : contact,
    eventName : 'Cryptext',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);


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
    eventName : 'C-Way',
    otp : otpGenerated
  };
  console.log("CWAY MAIL DATA :" + JSON.stringify(mailData));
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'C-Way',
    otp : otpGenerated
  }
  console.log("CWAY SMS DATA :" + JSON.stringify(smsData));
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Fast & Furious',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Fast & Furious',
    otp : otpGenerated
  }
  sendSms(smsData);

});


// //bdg
// app.get('/bridgethegap',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/public/register/bridgethegap-register.html'));
// });
// app.post('/bridgethegap',(req,res)=>{
//  let name = req.body.fullname;
//   let email = req.body.email;
//   let contact = req.body.contact;
//   let collegeName = req.body.collegeName;
//   let house = req.body.House;
//   let otpGenerated = generateCode();
//   console.log(req.body);

//    var insertData = [];
//   insertData.push(name);
//   insertData.push(email);
//   insertData.push(contact);
//   insertData.push(collegeName);
//   insertData.push(house);
//   insertData.push(otpGenerated);
  
//   let caCode = req.body.caCode;
//   insertData.push(caCode);

//   sendData('BRIDGETHEGAP',insertData)
//   .then((data)=>{
//     if (data == 1) {
//         res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
//     }
//   }).catch((error)=>{
//       console.error(error);
//   });

//   var mailData = {
//     name : name,
//     email : email,
//     eventName : 'Bridge The Gap',
//     otp : otpGenerated
//   };
//   mailer(mailData);

//   var smsData = {
//     name : name,
//     contact : contact,
//     eventName : 'Bridge The Gap',
//     otp : otpGenerated
//   }
//   sendSms(smsData);
// });


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
  insertData.push(otpGenerated);
  
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
    eventName : 'IOT',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'IOT',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'JavaGuru',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'JavaGuru',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Robomaze',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Robomaze',
    otp : otpGenerated
  }
  sendSms(smsData);
 
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'Mission Sql',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Mission Sql',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'RCMO',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'RCMO',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);


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
    eventName : 'Monster Arena',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Monster Arena',
    otp : otpGenerated
  }
  sendSms(smsData);
});



//myst
// app.get('/myst',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/public/register/myst-register.html'));
// });
// app.post('/myst',(req,res)=>{
//    let name = req.body.fullname;
//   let email = req.body.email;
//   let contact = req.body.contact;
//   let collegeName = req.body.collegeName;
//   let house = req.body.House;
//   console.log(req.body);

//    var insertData = [];
//   insertData.push(name);
//   insertData.push(email);
//   insertData.push(contact);
//   insertData.push(collegeName);
//   insertData.push(house);
  
//   let caCode = req.body.caCode;
//   insertData.push(caCode);

//   sendData('MYST',insertData)
//   .then((data)=>{
//     if (data == 1) {
//         res.sendFile(path.join(__dirname + '/public/register/thankyou.html'));        
//     }
//   }).catch((error)=>{
//       console.error(error);
//   });

//   var mailData = {
//     name : name,
//     email : email,
//     eventName : 'Myst'
//   };
//   mailer(mailData);
// });


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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Robo-Soccer',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Robo-Soccer',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Robo-Sumo',
    otp : otpGenerated
  };
  mailer(mailData);

var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Robo-Sumo',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Makers Square',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Makers Square',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Robo-Maze',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Robo-Maze',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Drone Racing',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Drone Racing',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Fast-N-Furious',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'Fast-N-Furious',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'RoboWars',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'RoboWars',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'Technical Paper Presentation',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Technical Paper Presentation',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'Sherlocked',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Sherlocked',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'Trimble-Bim-Contest',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Trimble-Bim-Contest',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'Smart City',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'SmartCity',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'TechnoHunt',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'TechnoHunt',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);


   var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);
  
  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);

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
    eventName : 'Ultimate Coder',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Ultimate Coder',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
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
  insertData.push(otpGenerated);

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
    eventName : 'VRC',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : leadername,
    contact : leadercontact,
    eventName : 'VRC',
    otp : otpGenerated
  }
  sendSms(smsData);
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
  let otpGenerated = generateCode();
  console.log(req.body);

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(house);

  let caCode = req.body.caCode;
  insertData.push(caCode);
  insertData.push(otpGenerated);
  
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
    eventName : 'Virtual Stock Market',
    otp : otpGenerated
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Virtual Stock Market',
    otp : otpGenerated
  }
  sendSms(smsData);
});

//askTheSpeaker
app.get('/askTheSpeaker',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/register/askTheSpeaker.html'));
});

app.post('/askTheSpeaker',(req,res)=>{
  let name = req.body.fullname;
  let email = req.body.email;
  let contact = req.body.contact;
  let collegeName = req.body.collegeName;
  let suresh_prabhu = req.body.suresh_prabhu;
  let ratna_pathak = req.body.ratna_pathak;
  let pawan_agrawal = req.body.pawan_agrawal;
  let henry_throop = req.body.henry_throop;
  let subramanain_swamy = req.body.subramanain_swamy;
  let ashok_soota = req.body.ashok_soota;
  let team_indus = req.body.team_indus;
  let panel_discussion = req.body.panel_discussion;
  let arup_raha = req.body.arup_raha;
  let anima_patil = req.body.anima_patil;
  let sonam_wangchuk = req.body.sonam_wangchuk;
  let understanding = req.body.understanding;
  console.log(req.body);

  var insertData = [];
  insertData.push(name);
  insertData.push(email);
  insertData.push(contact);
  insertData.push(collegeName);
  insertData.push(suresh_prabhu);
  insertData.push(ratna_pathak);
  insertData.push(pawan_agrawal);
  insertData.push(henry_throop);
  insertData.push(subramanain_swamy);
  insertData.push(ashok_soota);
  insertData.push(team_indus);
  insertData.push(panel_discussion);
  insertData.push(arup_raha);
  insertData.push(anima_patil);
  insertData.push(sonam_wangchuk);
  insertData.push(understanding);
  
  console.log("insertData GLS : " + JSON.stringify(insertData))
  sendData('GLS',insertData)
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
    eventName : 'Guest Lecture Series'
  };
  mailer(mailData);

  var smsData = {
    name : name,
    contact : contact,
    eventName : 'Guest Lecture Series'
  }
  sendSms(smsData);
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
app.get('/VRC_DRAFT_2',function(req,res){
  res.sendFile(path.join(__dirname + '/public/downloads/VRC 2017_Draft-2.pdf'));
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

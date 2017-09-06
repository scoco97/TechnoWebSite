const app = require('../express')
const con = require('../db');

//REST API TO REGISTER A NEW USER
app.post('/signup', function(req,res){
   console.log("req",req.body);
  var today = new Date();

  var users={
    "name":req.body.name,
    "email":req.body.email,
    "contact":req.body.contact,
    "password":req.body.password,
    "created":today
  }

  con.query('INSERT INTO users SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred : ",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    });
  }else{
    console.log('The solution is: ', results);
    res.send({
      "code":200,
      "success":"user registered sucessfully"
        });
  }
  });
});
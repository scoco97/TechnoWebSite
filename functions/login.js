const app = require('../express')
const connection = require('../db');

app.post('/login', function(req,res){
  var loginContact = req.body.loginContact;
  var loginPassword = req.body.loginPassword;
  connection.query('SELECT * FROM users WHERE contact = ?',[loginContact], function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    });
  }
  else
  {
     //console.log('The solution is: ', results);
    if(results.length > 0)
    {
      // bcrypt.compare(password, results[0].password, function(err, doesMatch){
      if(loginPassword === results[0].password){
        req.session.name = results[0].name;
       // res.redirect('/ourTeam.html');
        res.send({
          "code":200,
          "success":"login sucessful"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    // });
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
});
}
);
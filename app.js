const app = require('./express')
const con = require('./db');

const login = require('./functions/login')
const signup = require('./functions/signup')

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

// route for ourTeam
app.get('/ourTeam', (req, res) => {
   // if (req.session.user && req.cookies.user_sid) {
        res.sendFile(__dirname + '/public/ourTeamedit/ourTeam.html');
   // } else {
      //  res.redirect('/login');
    //}
});

// route for ourTeam
app.get('/events', (req, res) => {
   // if (req.session.user && req.cookies.user_sid) {
        res.sendFile(__dirname + '/public/events/radar/events.html');
   // } else {
      //  res.redirect('/login');
    //}
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

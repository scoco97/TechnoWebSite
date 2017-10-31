var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'yash.jain@technovanza.org',
        pass: 'yash#1234'
    }
});
module.exports = transporter;
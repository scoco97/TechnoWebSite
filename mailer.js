var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
// host: 'smtp.gmail.com',
// port: 465,
// secure: true,
service: 'gmail',
auth: {
        user: 'yash.jain@technovanza.org',
        pass: 'yash#1234'
    }
});
module.exports = transporter;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kamryn30@ethereal.email',
        pass: '4Qm1fm6BmdvGa5kaDz'
    }
});


var mailOptions = {
from: 'sigmund65@ethereal.email',
to: 'islemkacem333@gmail.com',
subject: 'Sending Email using Node.js',
text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
  console.log(error);
} else {
  console.log('Email sent: ' + info.response);
}
});
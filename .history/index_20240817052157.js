const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false,
});

const mailOptions = {
  from: 'your email',
  to: 'your email',
  subject: 'Sending Email using Node.js',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
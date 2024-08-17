const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



const transporter = nodemailer.createTransport({
  host: 'localhost', // Replace with your provider's SMTP server
  port: 1025, // Port may vary depending on your provider
  secure: false, // Use true for TLS, false for non-TLS (consult your provider)
 
});
const mailOptions = {
  from: 'your_email@provider.com', // Replace with your email address
  to: 'recipient@example.com', // Replace with the recipient's email address
  subject: 'Sending Email using Nodemailer', // Replace with your desired subject
  text: 'This is a plain text email body.', // Plain text content
  // or
  html: '<h1>Welcome!</h1><p>This is an HTML email body.</p>' // HTML content (optional)
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
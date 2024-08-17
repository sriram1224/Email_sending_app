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
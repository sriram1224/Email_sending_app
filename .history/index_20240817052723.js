const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Replace with your provider's SMTP server
  port: 587, // Port may vary depending on your provider
  secure: false, // Use true for TLS, false for non-TLS (consult your provider)
  auth: {
    user: 'your_email@provider.com', // Replace with your email address
    pass: 'your_password' // Replace with your email password
  }
});
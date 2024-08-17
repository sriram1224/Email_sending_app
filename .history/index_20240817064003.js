const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



// const transporter = nodemailer.createTransport({
//   host: 'localhost', // Replace with your provider's SMTP server
//   port: 1025, // Port may vary depending on your provider
//   secure: false, // Use true for TLS, false for non-TLS (consult your provider)
 
// });
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  
});
const mailOptions = {
  from: 'your_email@provider.com', // Replace with your email 
  to: 'recipient@example.com', // Replace with the recipient's email 
  subject: 'User Information', // Replace with your desired subject
  html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>User Information</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333;
                line-height: 1.6;
                margin: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
            }
            h1 {
                color: #0056b3;
            }
            .info {
                margin-bottom: 20px;
            }
            .info label {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>User Information</h1>
            <div class="info">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Address:</strong> 1234 Elm Street, Springfield, IL, 62701</p>
                <p><strong>Contact:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> johndoe@example.com</p>
            </div>
            <p>Thank you for being a valued user!</p>
        </div>
    </body>
    </html>
  `
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
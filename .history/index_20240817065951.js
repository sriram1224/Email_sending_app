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
  port: 587,
  secure: false, // Use false for STARTTLS
  auth: {
    user: '7a55b5001@smtp-brevo.com',
    pass: 'Ta6G7fQH2DwPE3J0'
  },
  tls: {
   ciphers: 'SSLv3', // Specify the TLS version
    rejectUnauthorized: false  // For testing purposes; consider removing or setting to true for production
  }
});
// const mailOptions = {
//   from: 'kasukurthibhargav@gmail.com', // Replace with your email 
//   to: 'kasukurthibhargav8@gmail.com', // Replace with the recipient's email 
//   subject: 'User Information' // Replace with your desired subject
  
// };

// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
app.get('/', (req, res) => { 
  
});

const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const transporter = nodemaile.createTransport({
  host: 'localhost',

  port: 1025,
  secure: false,
  auth: {
    user: 'your email',
    pass: 'your password'
  }
});
const mailoptions = {

  from
}
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(express.urlencoded({ extended: true }));

// const transporter = nodemailer.createTransport({
//   host: 'localhost', // Replace with your provider's SMTP server
//   port: 1025, // Port may vary depending on your provider
//   secure: false, // Use true for TLS, false for non-TLS (consult your provider)

// });
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // Use false for STARTTLS
  auth: {
    user: "7a55b5001@smtp-brevo.com",
    pass: "Ta6G7fQH2DwPE3J0",
  },
  tls: {
    ciphers: "SSLv3", // Specify the TLS version
    rejectUnauthorized: false, // For testing purposes; consider removing or setting to true for production
  },
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
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Email Form</title><style>body {
            font-family: Arial, sans-serif;
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
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }
        input, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            background-color: #0056b3;
            color: #fff;
            border: none;
            padding: 10px20px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #003d7a;
        }
    </style></head><body><div class="container">
    <h1>Send an Email</h1><form action="/send" method="POST">
    <label for="to">Recipient Email:</label><input type="email" id="to" name="to" required><label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required><label for="message">Message:</label><textarea id="message" name="message" rows="6" required>
    </textarea><button type="submit">Send Email</button>
    </form>
    </div>
    </body>
    </html>`);
});
app.post("/send", (req, res) => {
  console.log(req.body);
  const mailOptions = {
    from: req.body., // Replace with your email
    to: 'kasukurthibhargav8@gmail.com', // Replace with the recipient's email
    subject: 'User Information' // Replace with your desired subject

  };
});

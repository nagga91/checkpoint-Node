const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email-address@gmail.com', // Replace with your email address
    pass: 'your-email-password' // Replace with your email password
  }
});

// Define mail options
const mailOptions = {
  from: 'your-email-address@gmail.com', // Replace with your email address
  to: 'recipient-email-address@example.com', // Replace with recipient email address
  subject: 'Test email from Node.js',
  text: 'Hello from Node.js!'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

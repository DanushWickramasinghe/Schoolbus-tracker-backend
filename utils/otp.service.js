const nodemailer = require('nodemailer');
const config = require('../configs/config').gmail;

// Function to send OTP via email (using Nodemailer)
const sendEmailOtp = async (email, otp) => {
  let transporter = nodemailer.createTransport({
    service: config.email, // Or another email service provider
    auth: {
      user: config.trackmyrideEmail, // Add your email
      pass: config.trackmyridePassword, // Add your email password
    },
  });

  await transporter.sendMail({
    from: '"Track My Ride" <trackmyride.00@gmail.com>',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  });
};

module.exports = { sendEmailOtp };
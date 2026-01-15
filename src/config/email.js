const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Test email configuration
const testEmailConnection = async () => {
    try {
        await transporter.verify();
        console.log('Email service is ready');
    } catch (error) {
        console.error('Email service error:', error);
    }
};

module.exports = {
    transporter,
    testEmailConnection
};
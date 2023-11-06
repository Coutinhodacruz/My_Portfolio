
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { fullName, email, phoneNumber, emailSubject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dominicrotimi@gmail.com', // Your Gmail email address
            pass: 'yulwzurvxadfmavj'  // Your Gmail email password (consider using environment variables)
        }
    });

    let mailOptions = {
        from: email,
        to: 'dominicrotimi@gmail.com', // Your email address where you want to receive messages
        subject: emailSubject,
        text: `Name: ${fullName}\nEmail: ${email}\nMobile Number: ${phoneNumber}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




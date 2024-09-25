const User = require('./models/user');
const Order = require('./models/order');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongoose
  .connect('mongodb+srv://yijunli:yijunli@cluster0.omlak.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.log('Error connecting to DB', err);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// send a verification email
const sendVerificationEmail = async (email, verificationToken) => {
  // create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yijun.li@shopee.com',
      pass: 'nyifzunzrnnbiazp',
    },
  });
  // compose the mail message
  const mailOptions = {
    from: 'amazon.com',
    to: email,
    subject: 'Email Verification',
    text: `Please click the following link to verify your email : http://localhost:8000/verify/${verificationToken}`,
  };
  // send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Sent email successfully');
  } catch (error) {
    console.log('Error sending email', error);
  }
};

// register
app.post('/register', async (req, res) => {
  try {
    const {name, email, password} = req.body;
    // check if email exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: `Email already registered`});
    }
    // create a new User
    const newUser = new User({name, email, password});
    // generate verification token
    newUser.verificationToken = crypto.randomBytes(20).toString('hex');
    // save the use to the database
    await newUser.save();
    // send verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message:
        'Registration successful. Please check your email for verification.',
    });
  } catch (error) {
    console.log('Registering Error', error);
    res.status(500).json({message: 'Registration Failed'});
  }
});

// verify
app.get('/verify/:token', async (req, res) => {
  try {
    const token = req.params.token;
    // find user with the verification token
    const user = await User.findOne({verificationToken: token});
    if (!user) {
      return res.status(404).json({message: 'Invalid verification token'});
    }
    // mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({message: 'Email Verification Successfully'});
  } catch (error) {
    console.log('Verifying Error', error);
    res.status(500).json({message: 'Email Verifying Failed'});
  }
});

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();

// login
app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    // check if user exists
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'User not exists'});
    }
    // check if password correct
    if (user.password !== password) {
      return res.status(401).json({message: 'Passwords do not match'});
    }
    // generate a token
    const token = jwt.sign({userId: user._id}, secretKey);

    res.status(200).json({token});
  } catch (error) {
    res.status(500).json({message: 'Login Failed'});
  }
});

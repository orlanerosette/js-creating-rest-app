// Importing package
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// Executing package
const app = express();

// Middlewares - functions that executes when routes are being hit
// app.use('/posts', () => {
//   console.log('This is a middleware running'); // each time we go to /posts this middleware is being executed
// });


// ROUTES
app.get('/', (req,res) => {
  res.send('We are on home');
});

app.get('/posts', (req,res) => {
  res.send('We are on posts');
});

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to DB!');
})

// port number
app.listen(3000);


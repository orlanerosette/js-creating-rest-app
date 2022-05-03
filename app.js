// Importing package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Executing package
const app = express();

// Converts all req.body data into JSON (Middleware)
app.use(bodyParser.json());

// Allows you to access site across all domains
app.use(cors());

// Importing Routes
const postsRouter = require('./routes/posts');

// Specifying Routes - Example of Middleware
app.use('/posts', postsRouter);


// ROUTES
app.get('/', (req,res) => {
  res.send('We are on home');
});

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('connected to DB!');
})

// port number
app.listen(3000);


const dotenv = require('dotenv').config();
const path = require('path');
const colors = require('colors');
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoDBConnect = require('./config/db');


// Body Data
app.use(express.json());
app.use(express.urlencoded({extended : false }));

// Environment variable
const PORT = process.env.PORT || 5000;

// MongoDB Server connect
mongoDBConnect();

// EJS Setup
app.set("view engine", "ejs");
app.set("layout", "layouts/app.ejs");
app.use(expressLayouts);

// Static Folders
app.use('/assets', express.static(path.join(__dirname, '/assets')));

// All Routes
app.use('/student', require('./routes/studentRoute'));


// Server Listen
app.listen(PORT, () => console.log(`Server is Running on port http://localhost:${ PORT }/student`.bgCyan.black));
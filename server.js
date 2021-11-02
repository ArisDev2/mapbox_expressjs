const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
//load env variabel
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const app = express();

//express json
app.use(express.json());

//enable cors
app.use(cors());

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/v1/stores', require('./routes/stores'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} ${PORT}`)
);

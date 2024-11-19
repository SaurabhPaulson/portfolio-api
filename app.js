const express = require('express');
const app = express();
const emailFile = require('./routes/email')
const cors = require('cors');


app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
    res.json({ message: 'App is up and running!' });
  });

app.use('/routes/email', emailFile)

module.exports = app;   
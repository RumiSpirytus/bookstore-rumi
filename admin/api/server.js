const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoutes = require('./books.route.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database is connected');
    app.listen(PORT, () => {
      console.log(`Server is running on Port: ${PORT}`);
    });
  }).catch((err) => {
    console.log('Can not connect to the database', err);
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', productRoutes);


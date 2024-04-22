require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const { sequelize } = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);

// cek koneksi ke mysql
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.log('Unable to connect to the database:', error);
  });

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running on port', process.env.SERVER_PORT);
});

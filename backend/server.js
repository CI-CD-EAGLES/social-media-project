const express = require('express');
const debug = require('debug')('app:server');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
// DATABASE
const sequelize = require('./src/db');

// IMPORT ROUTES
const routes = require('./src/routes/index');

// CHECK DB CONNECTION
sequelize
  .authenticate()
  .then((res) => debug(colors.blue.inverse('Database is Conencted!')))
  .catch((err) => {
    debug(
      colors.red.inverse(`Error connecting to database: ${err}`)
    );
    // THIS WILL TERMINATE SERVER
    process.exit(1);
  })

const app = express();
app.use(cors()); //allows for cross-origin resource sharing

if ((process.env.MODE = 'development')) {
  app.use(morgan('dev'));
}

dotenv.config({path: path.join(__dirname, '..', '.env')});

// USE PUBLIC HTML SHEET
app.use(express.static(path.join(__dirname, 'src', 'public')));

// MAKE SURE SERVER CAN SPEAK JSON
app.use(express.json());

// ROUTES
app.use('/api', routes);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(colors.rainbow(`Server is up and running on PORT: ${PORT}`));
});

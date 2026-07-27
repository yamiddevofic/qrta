const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const empleadoRoute = require('./routes/empleado');
const viewRoute = require('./routes/view');

dotenv.config();
const URI = process.env.MONGO_URI || `mongodb+srv://yamiddev_db_user:${process.env.pass}@cluster-dev.loe0ymb.mongodb.net/test?appName=Cluster-Dev`;

mongoose.connect(URI);
const db = mongoose.connection;

db.addListener('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.addListener('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/empleado', empleadoRoute);
app.use('/', viewRoute);
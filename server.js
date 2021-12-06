//npm install express required
const express = require('express');
//apiRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//create express server using name "app"
const app = express();

//set first port
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('public'));

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());


//use api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start server
app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});
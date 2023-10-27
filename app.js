// sets up express
const express = require('express'); 
const app = express();

// creates a path and makes the public file static 
const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

// sets up pug 
app.set('view engine', 'pug'); 

// imports the route file 
const routes = require('./routes');
app.use(routes); 

// imports the error handlers 
const errorHandlers = require('./errorHandlers'); 
app.use(errorHandlers.handle404Error); 
app.use(errorHandlers.handleGlobalError); 

// sets up the local host 
app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
}); 

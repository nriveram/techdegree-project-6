const express = require('express'); 
const app = express();

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug'); 

const routes = require('./routes');
app.use(routes); 

const errorHandlers = require('./errorHandlers'); 
app.use(errorHandlers.handle404Error); 
app.use(errorHandlers.handleGlobalError); 

app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
}); 

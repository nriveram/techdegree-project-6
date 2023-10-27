const express = require('express'); 
const {projects} = require('./data.json');

const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug'); 

app.get('/', (req, res) => {
    res.locals = projects; 
    res.render('index'); 

}); 

app.get('/about', (req, res) => {
    res.render('about'); 

}); 

app.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    if (project) {
      res.render('project', { project });
    } else {
      res.sendStatus(404);
    }
  });

app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
}); 

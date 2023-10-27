const express = require('express');
const router = express.Router();
const {projects} = require('./data.json');

router.get('/', (req, res) => {
    res.locals = projects; 
    res.render('index'); 

}); 

router.get('/about', (req, res) => {
    res.render('about'); 

}); 

router.get('/projects/:id', function(req, res, next) {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    
    if (project) {
      res.render('project', { project });
    } else {
      res.sendStatus(404);
    }
  });

module.exports = router;
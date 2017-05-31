const express = require('express');
const bodyParser = require('body-parser');
const { DATABASE, PORT } = require('./config');

const knex = require('knex')(DATABASE);
const Treeize = require('treeize');
const handleResults = new Treeize();
const app = express();
app.use(bodyParser.json());


app.post('/restaurants/', (req, res) => {

  knex('restaurants').insert({
    name: req.body.name,
    cuisine: req.body.cuisine,
    borough: req.body.borough
  }).returning('id').then(results => {
    knex('grades').insert(req.body.grades.map((grade)=>{return {
      grade: grade.grade,
      score: grade.score,
      date: new Date(),
      restaurant_id: results[0]
    }}))
    .then(results => res.sendStatus(200));
  });
});

//const hydrated = {};


app.listen(PORT);

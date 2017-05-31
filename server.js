const express = require('express');
const bodyParser = require('body-parser');

const { DATABASE, PORT } = require('./config');

const knex = require('knex')(DATABASE);

const app = express();
app.use(bodyParser.json());


app.get('/restaurants/:id', (req, res) => {

  knex.first('restaurants.id', 'name', 'cuisine', 'borough','grades.id', 'grade', 'date as inspectionDate', 'score')
    .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
    .where('restaurants.id', req.params.id)
    .from('restaurants')
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
    .orderBy('date', 'desc')
    .then(results => res.json(results));
});

//const hydrated = {};


app.listen(PORT);

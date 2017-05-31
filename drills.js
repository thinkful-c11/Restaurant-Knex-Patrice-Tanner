
const { DATABASE, PORT } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\033c');

// Sample select 
// knex.select().from('restaurants')
//   .debug(true)
//   .then(results => console.log(results));

// #1
// knex.select().from('restaurants')
//   .debug(true)
//   .then(results => console.log(results));

//#2
// knex.select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .debug(true)
//   .then(results => console.log(results));

//#3
  // knex.select('id', 'name')
  //   .from('restaurants')
  //   .where('cuisine', 'Italian')
  //   .debug(true)
  //   .limit(10)
  //   .then(results => console.log(results));

// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') });

const { DATABASE, PORT } = require('./config');
const knex = require('knex')(DATABASE);
const Treeize = require('treeize');
const handleResults = new Treeize();

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

//#4
// knex.count('id')
//     .from('restaurants')
//     .where('cuisine', 'Thai')
//     .debug(true)
//     .then(results => console.log(results));

//#5
// knex.count('id')
//   .from('restaurants')
//   .debug(true)
//   .then(results => console.log(results));

//#6
// knex.count('id')
//     .from('restaurants')
//     .where({cuisine: 'Thai', address_zipcode: 11372})
//     .debug(true)
//     .then(results => console.log(results));

//#7
// knex.select('id', 'name')
//   .from('restaurants')
//   .where({cuisine:'Italian', address_zipcode: 10012})
//   .orWhere({cuisine:'Italian',address_zipcode: 10013})
//   .orWhere({cuisine:'Italian',address_zipcode: 10014})
//   .orderBy('name','asc')
//   .limit(5)
//   .debug(true)
//   .then(results => console.log(results));

//#8
// knex('restaurants').insert({
//   name: 'Byte Cafe',
//   borough: 'Brooklyn',
//   cuisine: 'coffee',
//   address_building_number: '123',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// }).then(results=> console.log(results));

// knex('restaurants').select('name').where({name: 'Byte Cafe'}).then(results => console.log(results));

//#9
// knex('restaurants').returning(['id', 'name']).insert({
//   name: 'Papa Johns',
//   borough: 'Brooklyn',
//   cuisine: 'Italian',
//   address_building_number: '126',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// }).then(results=> console.log(results));

//#10
// knex('restaurants').returning(['id', 'name']).insert([{
//   name: 'Dennys',
//   borough: 'Brooklyn',
//   cuisine: 'American',
//   address_building_number: '128',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// },
// {name: 'Taco Bell',
//   borough: 'Brooklyn',
//   cuisine: 'American',
//   address_building_number: '129',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'}, {
//     name: 'Chick-Fil-A',
//     borough: 'Brooklyn',
//     cuisine: 'American',
//     address_building_number: '130',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   }]).then(results=> console.log(results));

//#11
  // knex('restaurants').where('nyc_restaurant_id', '30191841').returning('name').update({name: 'DJ Reynolds Pub and Restaurant'})
  // .then(results => console.log(results));

 // knex('restaurants').select('name', 'id').where({name: 'Dj Reynolds Pub And Restaurant'}).then(results => console.log(results));

 //#12
  // knex('grades').where('id', '10').del().then(results => console.log("it's been deleted.."));

  //#13
    // knex('restaurants').where('id', '23').del().then(results => console.log("this can't be deleted,", results));
    // knex.select('name').from('restaurants').where('id', '23').then(results => console.log(results));


//hydrated

// knex.select('people.id', 'name', 'age', 'pets.name as petName', 'pets.type as petType')
//     .from('people')
//     .innerJoin('pets', 'people.id', 'pets.people_id')
//     .then(results => res.json(results));
// const hydrated = {};
// people.forEach(row => {
//   if ( !(row.id in hydrated) ) {
//         hydrated[row.id] = {
//             id: row.id,
//             name: row.name,
//             age: row.age,
//             pets: []
//         }
//     }
//     hydrated[row.id].pets.push({
//         name: row.petName,
//         type: row.petType,
//     });
// });
// console.log(hydrated);

// knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
//     .from('restaurants')
//     .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
//     .orderBy('date', 'desc')
//     .limit(10)
//     .then(results => hydrator(results));

// const hydrated = {};
// function hydrator (results){
//   results.forEach(row => {
//     if(!(row.id in hydrated)){
//       hydrated[row.id] = {
//         id : row.id,
//         name : row.name,
//         cuisine : row.cuisine,
//         borough : row.borough,
//         grades : []
//       }
//     }
//     hydrated[row.id].grades.push({
//       gradeID : row.gradeId,
//       grade : row.grade,
//       score : row.score
//     });

//   });

//   console.log(JSON.stringify(hydrated,null, 4));
// }

// knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id as gradeId', 'grade', 'score')
//     .from('restaurants')
//     .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')
//     .orderBy('date', 'desc')
//     .limit(10)
//     .then(results => console.log(JSON.stringify(handleResults.grow(results), null, 4)));

// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') });

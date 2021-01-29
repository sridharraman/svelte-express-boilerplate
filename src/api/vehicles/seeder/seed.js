import db from '../../dbconnection.js';
import vehicles from './vehicles.js';

// create table
function createVehicles() {
  db.none("\
    create table if not exists vehicles( \
      id serial, \
      city_id integer, \
      vehicle_type character varying(30), \
      count integer \
    )")
    .then(() => {
      console.log('Created vehicles ...');
      populateVehicles();
    })
    .catch(error => {
      console.log(error);
    });
}

// populate table
function populateVehicles() {
  db.tx(t => {
    const queries = vehicles.map(l => {
      return t.none('insert into vehicles(city_id, vehicle_type, count) \
        values(${city_id}, ${vehicle_type}, ${count})', l);
    });
    return t.batch(queries);
  })
  .then(data => {
    console.log('... populated vehicles.');
  })
  .catch(error => {
    console.log(error);
  });
}

// main
createVehicles();

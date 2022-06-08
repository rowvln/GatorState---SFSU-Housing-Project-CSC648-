// Creates a pool of connections for querying PostgresQL database.

// Require PostgresQL module from Node packages
var pg = require('pg');
delete pg.native;
const Pool = pg.Pool;
// Create a new connection from Pool
const pool = new Pool({
  // Enter username here:
  user: 'postgres',
  // Enter server address here
  host: 'gatorstate.tk',
  // Enter which database you'd like to connect to
  //database: 'postgres',
  database: 'csc648team06s19db',
  // Enter password here
  password: 'T3am06S19p0st!',
  // Enter which port PostgresQL is using
  port: '5432'
});

/* 
//NO LONGER IN USE
*/

// const getListings = (request, response) => {
// 	  const zipcode = parseInt(request.params.zipcode);
// 	 const filter = request.params.filter;
// 	var userid = 1;
// 	//var zipcode = 94132;

// 	pool.query(`SELECT street_address, city, zip_code, state, images, home_type, price FROM listings WHERE zip_code = '${zipcode}' AND home_type = '${filter}'`, (error, results) => {
// 		if (error) {
// 		throw error
// 		}
// 		response.status(200).json(results.rows)
// 	})
// }

// const getZipListings = (request, response) => {
// 	const zipcode = parseInt(request.params.zipcode);
// 	pool.query(`SELECT street_address, city, zip_code, state, images, home_type, price FROM listings WHERE zip_code = '${zipcode}'`, (error, results) => {
// 		if (error) {
// 		throw error
// 		}
// 		response.status(200).json(results.rows)
// 	})
// }

const getAllListings = (request, response) => {
  pool.query(
    'SELECT street_address, city, zip_code, state, images, home_type, price FROM listings',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getHouseTypeListings = (request, response) => {
  const filter = request.params.filter;
  pool.query(
    `SELECT street_address, city, zip_code, state, images, home_type, price FROM listings WHERE home_type = '${filter}'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getLikeListingsFilter = (request, response) => {
  const search = request.params.search.toLowerCase();
  const filter = request.params.filter.toLowerCase();

  debugger;
  pool.query(
    `SELECT street_address, city, zip_code, state, images, home_type, price FROM listings WHERE home_type = '${filter}' AND (LOWER(street_address) LIKE '%${search}%' OR zip_code LIKE '%${search}%' OR LOWER(city) LIKE '%${search}%')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getLikeListingsNoFilter = (request, response) => {
  const search = request.params.search.toLowerCase();
  debugger;

  pool.query(
    `SELECT street_address, city, zip_code, state, images, home_type, price FROM listings WHERE (LOWER(street_address) LIKE '%${search}%' OR zip_code LIKE '%${search}%' OR LOWER(city) LIKE '%${search}%')`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getAllListings,
  getHouseTypeListings,
  getLikeListingsFilter,
  getLikeListingsNoFilter
};

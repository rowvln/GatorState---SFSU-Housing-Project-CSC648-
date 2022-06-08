/* SETUP HERE
// ---------------
// This section will setup all dependencies and variables required to run the server.
*/

// Express
const express = require('express');
const app = express();
// const env = 'development';
// const config = require('./knexfile')[env];
// const knex = require('knex')(config);
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
const routes_setter = require('./config/routes.js');
routes_setter(app);
// BodyParser

// Server info
// const path = require('path');

// PostgresQL
// const db = require('./queries/queries');

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//app.use(express.static(__dirname + '/components'));

// viewed at http://localhost:3000
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

/*
//  About Page Redirect
*/
// app.get('/about', function(req, res) {
//   res.sendFile(path.join(__dirname + '/components/about/about.html'));
// });

// app.get('/listings/:search/:filter', db.getLikeListingsFilter);
// app.get('/listingsSearch/:search', db.getLikeListingsNoFilter);
// app.get('/listingsFilter/:filter', db.getHouseTypeListings);
// app.get('/listings', db.getAllListings);

/*
//  Search Page Redirect
// */
// app.get('/search', function(req, res) {
//   // eslint-disable-next-line no-undef
//   listings = 'WADDUP';
//   res.render('search', {
//     search: req.query.search,
//     filter: req.query.filter,
//     // eslint-disable-next-line no-undef
//     listingsInfo: listings
//   });
// });

/* 
//	PERSONAL PAGES ROUTES
//  WE COULD POTENTIALLY GET RID OF THESE 
*/

// // routed to Rowvin's Profile
// app.get('/rowvin', function(req, res) {
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Rowvin.html')
//   );
// });

// // routed to Jonathan's Profile
// app.get('/Jonathan', function(req, res) {
//   //console.log("button was clicked")
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Jonathan.html')
//   );
// });

// // routed to Kayla's Profile
// app.get('/Kayla', function(req, res) {
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Kayla.html')
//   );
// });

// // routed to Daisy's Profile
// app.get('/Daisy', function(req, res) {
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Daisy.html')
//   );
// });

// routed to Minho's Profile
// app.get('/Minho', function(req, res) {
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Minho.html')
//   );
// });

// // routed to Rene's Profile
// app.get('/Rene', function(req, res) {
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Rene.html')
//   );
// });

// // routed to Marlon's Profile
// app.get('/Marlon', function(req, res) {
//   res.sendFile(
//     path.join(__dirname + '/components/about/personalPages/Marlon.html')
//   );
// });

// // so we can just click on the server link
// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

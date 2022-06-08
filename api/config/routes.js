const listings = require('../controllers/listings');
const users = require('../controllers/users');
const jwt = require('jsonwebtoken');
// const secret = require('./secret');
const secret = process.env.JWT_SECRET || 'secret';

module.exports = app => {
  app.post('/users', users.create);
  app.post('/sessions', users.login);
  // app.use(verifyToken);
  app.get('/user', users.verify);
  app.get('/listings', listings.index);
  app.get('/listings/:id', listings.grabListing);
  app.get('/userListings/:userid', listings.grabUserListings);
  app.get('/listingsSearch/:search', listings.searchListing);
  app.post('/listings', listings.createListing);
  app.patch('/listings/:id', listings.updateListing);
  app.delete('/listings/:id', listings.deleteListing);
};

function verifyToken(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.status(401).send({
          message:
            'You are not authorized to view that resource, Please log in to continue.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        delete decoded.password;
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(401).send({
      message:
        'You are not authorized to view that resource, Please log in to continue.'
    });
  }
}

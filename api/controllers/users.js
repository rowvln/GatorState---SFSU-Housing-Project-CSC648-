const knex = require('../knex');
const hasher = require('../config/hashing');
const jwt = require('jsonwebtoken');
// const secret = require('../config/secret');
const secret = process.env.JWT_SECRET || 'secret';

module.exports = {
  create: (req, res) => {
    hasher.hash(req.body).then(user => {
      knex('users')
        .insert(
          {
            first_name: user.firstName,
            last_name: user.lastName,
            email: 'no email to see',
            username: user.username,
            password: user.password
          },
          'id'
        )
        .then(results => {
          res.json({
            message: `Welcome ${user.firstName}! You successfully registered, please log in`,
            id: results[0]
          });
        })
        .catch(err => {
          res.status(400).send({ message: err });
        });
    });
  },

  login: (req, res) => {
    knex('users')
      // .where('email', req.body.email)
      .where('username', req.body.username)
      .first()
      .then(user => {
        if (user) {
          hasher.check(user, req.body).then(isMatch => {
            if (isMatch) {
              const token = jwt.sign(user, secret);
              delete user.password;
              res.json({ message: 'Successfully signed in', token, user });
            } else {
              res.status(400).send({ message: 'Invalid Username / Password' });
            }
          });
        } else {
          res.status(400).send({ message: 'Invalid Username / Password' });
        }
      })
      .catch(err => {
        res.status(400).send({ message: 'Invalid Username / Password' });
      });
  },

  verify: (req, res) => {
    res.json(req.decoded);
  }
};

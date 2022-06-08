const knex = require('../knex');

module.exports = {
  index: (req, res) => {
    let page = 1;
    if (req.query.page) {
      page = Number(req.query.page);
    }
    knex('listings')
      .offset((page - 1) * 10)
      .limit(30)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  /**
   * * But again this will just be for grabbing a listing*
   * ? This function will do as it says?
   */

  // grabListing: (req, res) => {
  //   knex('listings')
  //     .where('id', req.params.id)
  //     .first()
  //     .then(results => {
  //       res.json(results);
  //     })
  //     .catch(err => {
  //       res.status(400).send({ message: err });
  //     });
  // },

  /**
   * * This will always be used*
   * ? This function will be renamed to grabListingByFromUser?
   */

  searchListing: (req, res) => {
    const searchReq = req.params.search.toLowerCase();
    console.log(searchReq)
    knex('listings')
      .whereRaw(`LOWER(street_address) LIKE '%${searchReq}%' OR LOWER(city) LIKE '%${searchReq}%'`)
      .then(results => {
        if (results.length === 0) {
          knex('listings')
            .where('zip_code', req.params.search)
            .then(results2 => {
              res.json(results2);
            })
            .catch(err => {
              res.status(400).search({ message: err });
            });
        }
        else{
          res.json(results);
        }
      })
      .catch(err => {
        res.status(400).search({ message: err });
      });
  },

  grabListing: (req, res) => {
    knex('listings')
      .join('users', 'users.id', 'listings.user_id')
      .select('listings.*', 'users.email')
      .where('listings.id', req.params.id)
      // .first()
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  grabUserListings: (req, res) => {
    knex('listings')
      .select('listings.*')
      .where('listings.user_id', req.params.userid)
      // .first()
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  createListing: (req, res) => {
    knex('listings')
      .insert(
        {
          user_id: req.body.user_id,
          street_address: req.body.street_address,
          city: req.body.city,
          zip_code: req.body.zip_code,
          state: req.body.state,
          image_url: req.body.image_url,
          home_type: req.body.home_type,
          price: req.body.price,
          description: req.body.description
        },
        '*'
      )
      .then(result => {
        res.json(result[0]);
      })
      .catch(err => {
        res.status(422).send({ message: err });
      });
  },

  updateListing: (req, res) => {
    knex('listings')
      .where('id', req.params.id)
      .update({
        street_address: req.body.street_address,
        city: req.body.city,
        zip_code: req.body.zip_code,
        state: req.body.state,
        image_url: req.body.image_url,
        home_type: req.body.home_type,
        price: req.body.price,
        description: req.body.description
      })
      .then(results => {
        res.json(results[0]);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },

  deleteListing: (req, res) => {
    knex('listings')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.status(200).send({ message: 'Sucessfully deleted listing' });
      })
      .catch(err => {
        res.status(422).send({ message: err });
      });
  }
};

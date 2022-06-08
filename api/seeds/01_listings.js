exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('listings').insert([
        {
          user_id: 2,
          street_address: '156 Park View Ave',
          city: 'San Francisco',
          zip_code: 94014,
          state: 'CA',
          image_url:
            'https://geo2.ggpht.com/cbk?panoid=C4KTJAqnT4EY0l8RBxOunA&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=240&yaw=1.2060657&pitch=0&thumbfov=100',
          home_type: 'apartment',
          price: 2000.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum provident accusamus error alias voluptate sed saepe. Repellendus similique distinctio itaque maiores deleniti sit tenetur odio est ad, officiis quibusdam!'
        },
        {
          user_id: 1,
          street_address: '15 Stratford Dr',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://image3-mls-prod.owners.com/8fc1_105070101/349200/a1f3bafc-e4f7-4e98-9949-f37def5e2221_1200x800.jpg',
          home_type: 'apartment',
          price: 1800.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum provident accusamus error alias voluptate sed saepe. Repellendus similique distinctio itaque maiores deleniti sit tenetur odio est ad, officiis quibusdam!'
        },
        {
          user_id: 3,
          street_address: '263 Ralston St',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00q0q_kbYuOMtpcXX_600x450.jpg',
          home_type: 'apartment',
          price: 1200.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum provident accusamus error alias voluptate sed saepe. Repellendus similique distinctio itaque maiores deleniti sit tenetur odio est ad, officiis quibusdam!'
        },
        {
          street_address: '338 Faxon Ave',
          city: 'San Francisco',
          zip_code: 94112,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00A0A_lbNSFyxErnm_600x450.jpg',
          home_type: 'apartment',
          price: 1120.55,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum provident accusamus error alias voluptate sed saepe. Repellendus similique distinctio itaque maiores deleniti sit tenetur odio est ad, officiis quibusdam!'
        },
        {
          street_address: '418 Garfield St',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00b0b_gO7fxGCKcZ8_600x450.jpg',
          home_type: 'house',
          price: 1250.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum provident accusamus error alias voluptate sed saepe. Repellendus similique distinctio itaque maiores deleniti sit tenetur odio est ad, officiis quibusdam!'
        },
        {
          street_address: '39 Carmel St',
          city: 'San Francisco',
          zip_code: 94117,
          state: 'CA',
          image_url:
            'https://ssl.cdn-redfin.com/photo/9/mbpaddedwide/043/genMid.448043_0.jpg',
          home_type: 'house',
          price: 2500.63,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illum provident accusamus error alias voluptate sed saepe. Repellendus similique distinctio itaque maiores deleniti sit tenetur odio est ad, officiis quibusdam!'
        },
        {
          street_address: '231 Grafton Ave',
          city: 'San Francisco',
          zip_code: 94117,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00909_k1yeYClv7wj_600x450.jpg',
          home_type: 'house',
          price: 3000.63,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '43rd Ave & Judah St',
          city: 'San Francisco',
          zip_code: 94122,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00d0d_666xBhhz5wo_600x450.jpg',
          home_type: 'house',
          price: 2100.9,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '127 Victoria St',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/01414_cEJ6FcBuUiT_600x450.jpg',
          home_type: 'house',
          price: 1800.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: 'Chumasero Dr',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00C0C_gfcv5r2Qk8Z_600x450.jpg',
          home_type: 'apartment',
          price: 3400.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '1200 Ocean Ave',
          city: 'San Francisco',
          zip_code: 94112,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00M0M_9sxANWyXWLQ_600x450.jpg',
          home_type: 'apartment',
          price: 3345.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '558 Bellevue Ave',
          city: 'Daly City',
          zip_code: 94014,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00L0L_9W9o53I9nqY_600x450.jpg',
          home_type: 'apartment',
          price: 3300.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: 'Vidal Dr',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00x0x_bTOv6Zvbb6Y_600x450.jpg',
          home_type: 'apartment',
          price: 2607.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: 'Yorba St #B',
          city: 'San Francisco',
          zip_code: 94116,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00k0k_hz9EpWhHDZ7_600x450.jpg',
          home_type: 'apartment',
          price: 895.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '344 Moncada Way',
          city: 'San Francisco',
          zip_code: 94127,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00q0q_81mu3QMcTAY_600x450.jpg',
          home_type: 'apartment',
          price: 1250.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '960 St Francis Blvd',
          city: 'San Francisco',
          zip_code: 94015,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00F0F_kH4bge1tU9e_600x450.jpg',
          home_type: 'apartment',
          price: 2295.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '768 Stewart Ave',
          city: 'Daly City',
          zip_code: 94015,
          state: 'CA',
          image_url:
            'https://images.craigslist.org/00u0u_k7M2eBJzJJ4_600x450.jpg',
          home_type: 'apartment',
          price: 1400.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '800 Font Blvd',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'http://www.thesfnews.com/wp-content/uploads/2015/11/UPM_office_font_view.jpg',
          home_type: 'dorm',
          price: 7145.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '802 Font Blvd',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://housing.sfsu.edu/sites/default/files/styles/profile_pic/public/MPH%20Building.jpg?itok=eEXrQR0l',
          home_type: 'dorm',
          price: 6645.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '796 Font Blvd',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9F3Nw6gadVMtCzApdpd2j2Nv6JyHYQysfZHup7m-EnB1HbnLUkA',
          home_type: 'dorm',
          price: 6645.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '750 Font Blvd',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url:
            'https://housing.sfsu.edu/sites/default/files/images/Village%20Hero_0.jpg',
          home_type: 'dorm',
          price: 6645.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        },
        {
          street_address: '1600 Holloway Ave',
          city: 'San Francisco',
          zip_code: 94132,
          state: 'CA',
          image_url: 'https://summerconf.sfsu.edu/sites/default/files/UPS.jpg',
          home_type: 'dorm',
          price: 6205.0,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate eius in voluptates repudiandae impedit quam ratione nulla optio qui atque voluptatibus, numquam eveniet alias exercitationem aperiam? Asperiores, error qui?'
        }
      ]);
    });
};

const express = require ('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

const sequelize = new Sequelize('postgres://postgres:gimmeaword@localhost:5432/properties_db');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var Property = sequelize.define('property', {
    streetaddress: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipcode: Sequelize.SMALLINT,
    price: Sequelize.INTEGER,
    bedrooms: Sequelize.SMALLINT,
    baths: Sequelize.SMALLINT,
    sqfootage: Sequelize.SMALLINT,
    imgurl: Sequelize.TEXT,
    featured: Sequelize.BOOLEAN
},
{
    freezeTableName: true
});
sequelize.sync({
    force: true
}).then(() => {
    Property.bulkCreate([
        {streetaddress: '123 Peachtree', city: 'Atlanta', state: 'ga', zipcode:30307, price: 356000, bedrooms: 4, baths:4, sqfootage: 6000, featured: true},
        {streetaddress: '456 Piedmont', city: 'Atlanta', state: 'ga', zipcode:30308, price: 870000, bedrooms: 7, baths:6.5, sqfootage: 10600, featured: true},
        {streetaddress: '789 North Druid Hills', city: 'Atlanta', state: 'ga', zipcode:30309, price:550000, bedrooms: 6, baths:5, sqfootage: 9741, featured: true}
    ])
});

app.get('/api/properties', (req, res ) => {
    Property.findAll({
        attributes: ['streetaddress', 'city', 'state', 'price', 'bedrooms', 'baths']
    }).then((list) => {
        res.json(list);
    })
 });

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
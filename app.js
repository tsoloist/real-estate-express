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
    zipcode: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    bedrooms: Sequelize.INTEGER,
    baths: Sequelize.INTEGER,
    sqfootage: Sequelize.INTEGER,
    imgurl: Sequelize.TEXT,
    featured: Sequelize.BOOLEAN
},
{
    freezeTableName: true
});
sequelize.sync().then(() => {
    console.log("Property table created.")
});

var User = sequelize.define('user', {
    email: Sequelize.STRING,
    password: Sequelize.STRING
},
{
    freezeTableName: true
});
sequelize.sync().then(() => {
    console.log("User table create.");
});

app.get('/api/properties', (req, res ) => {
    Property.findAll({
        attributes: ['id', 'streetaddress', 'city', 'state', 'price', 'bedrooms', 'baths', 'imgurl', 'featured'],
        where: {featured: true}
    }).then((list) => {
        res.json(list);
    })
 });

 app.post('/api/properties', (req, res ) => {
    console.log(req.body);
    Property.create(
        req.body
    ).then((entry) => {
        res.json(entry);
    })
 });

 app.get('/api/viewpropertieslist', (req, res ) => {
    Property.findAll({
        attributes: ['streetaddress', 'city', 'state', 'zipcode', 'price', 'bedrooms', 'baths', 'imgurl'],
    }).then((list) => {
        res.json(list);
    })
 });

 app.post('/api/login', (req, res) => {
    console.log(req.body);
    User.create(
        req.body
    ).then((credentials) => {
        res.json(credentials);
    })
 });

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require ('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(cookieParser());


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
    streetaddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [2]
    },
    zipcode: {
        type: Sequelize.INTEGER,
        len: [5],
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    baths: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sqfootage: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imgurl: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    featured: Sequelize.BOOLEAN
},
{
    freezeTableName: true
});

sequelize.sync({
    logging: console.log
})
.then(() => {
    console.log("Property table created.");
})
.catch((error) => {
    console.log(error);
});



var Users = sequelize.define('users', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true,
        validate: {
            isEmail: {
                args: true,
                msg: 'Email entered was not valid.'
            }
        }     
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5, 100],
                msg: 'Password must be more than 5 characters'
            }
        }
    }
},
{
    freezeTableName: true
});

sequelize.sync({
    logging: console.log
})
.then(() => {
    console.log("Users table created.");
})
.catch((error) => {
    console.log(error);
});


app.get('/api/properties', (req, res ) => {
    Property.findAll({
        attributes: ['id', 'streetaddress', 'city', 'state', 'price', 'bedrooms', 'baths', 'imgurl', 'featured'],
        where: {featured: true}
    }).then((list) => {
        res.json(list);
    })
 });

 app.get('/api/viewpropertieslist', (req, res ) => {
    Property.findAll({
        attributes: ['streetaddress', 'city', 'state', 'zipcode', 'price', 'bedrooms', 'baths', 'imgurl'],
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

 app.post('/api/login', (req, res) => {
    let email = req.body.email;
    var password = req.body.password;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            password = hash;
            let credentialArray = {email: email, password: password};
            console.log(req.body);
            console.log(credentialArray);
            Users.create(
               credentialArray
            ).then((credentials) => {
                res.json(credentials);
            })
        });
    });
 });

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
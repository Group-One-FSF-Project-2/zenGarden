const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers'); //optional
const controllers = require('./controllers');
<<<<<<< HEAD
=======
// const exhbs = require('express-handlebars');

>>>>>>> 5b82dd275dc1c0fd5d6be71ce54bb7d63aed77dc
// initialize models for sequelize
// const model = require('./models/index');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;

<<<<<<< HEAD
=======


>>>>>>> 5b82dd275dc1c0fd5d6be71ce54bb7d63aed77dc
const secret = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(secret));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
<<<<<<< HEAD
=======
const hbs = exhbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

>>>>>>> 5b82dd275dc1c0fd5d6be71ce54bb7d63aed77dc

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

<<<<<<< HEAD
=======
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
    console.log('Server started.'));

app.use(controllers);

>>>>>>> 5b82dd275dc1c0fd5d6be71ce54bb7d63aed77dc
app.get('/', (req, res) => {
  res.render('home');
});

<<<<<<< HEAD
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('server started on http://localhost:' + PORT);
  });
=======

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('server started on http://localhost:' + PORT);
    })

>>>>>>> 5b82dd275dc1c0fd5d6be71ce54bb7d63aed77dc
});

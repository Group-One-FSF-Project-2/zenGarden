const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers'); //optional
const controllers = require('./controllers');
// const exhbs = require('express-handlebars');

// initialize models for sequelize
// const model = require('./models/index');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;



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
    db: sequelize
  })
};

app.use(session(secret));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
const hbs = exhbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then (() => {
  app.listen(PORT, () => 
    console.log('Server started.'));

app.use(controllers);

app.get('/', (req, res) => {
    res.render('home');
});


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('server started on http://localhost:' + PORT);
    })

});

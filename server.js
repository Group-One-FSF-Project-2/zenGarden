const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars'); 
const routes = require('./controllers');
// const helpers = require('./utils/helpers'); //optional
const controllers = require('./controllers');
// initialize models for sequelize
// const model = require('./models/index');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT =  process.env.PORT || 3001;

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


const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
//app.engine('handlebars', exphbs.create());
app.set('view engine', 'handlebars');

// app.engine('handlebars', hbs.engine);
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => 
    console.log(`Server started on ${PORT}.`)
 
  )
});


app.use(controllers);

// TESTING WITH PARAMETERS - Scott 28Jul
app.get('/', (req, res) => {
  res.render('home', {
    plotId: 3,
    plot_name: 'My new garden',});
});

  //This was just in the wrong place, need to be before
// app.use(controllers);

// app.get('/', (req, res) => {
//   res.render('home');
// });

// this was called twice so i just removed one
// sequelize.sync({force: false}).then(() => {
//     app.listen(PORT, () => {
//         console.log('server started on http://localhost:' + PORT);
//     });

// });

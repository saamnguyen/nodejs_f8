const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes'); //K can viet ro ra la index.js
const db = require('./config/db');

// Connect DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// HTTP Logger
// app.use(morgan('combined'));

// Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //Đổi đường dẫn cho views, window or linux se tu cho them dau "\\" or "/" vao

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
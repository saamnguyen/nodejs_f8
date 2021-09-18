const newsRouter = require('./news');
const newSite = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', newSite);
}

module.exports = route;
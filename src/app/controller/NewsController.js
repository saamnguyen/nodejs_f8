class NewsController {

    //GET /news
    index(req, res) {
        res.render('news');
    }

    // GET /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!');
    }
}

module.exports = new NewsController; //Tạo ra 1 NewsController rồi export ra ngoài
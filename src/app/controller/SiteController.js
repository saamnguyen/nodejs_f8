class SiteController {

    //GET /home
    index(req, res) {
        res.render('home');
    }

    // GET /search 
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController; //Tạo ra 1 NewsController rồi export ra ngoài
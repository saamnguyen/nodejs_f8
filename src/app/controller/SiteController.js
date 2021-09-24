const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  //GET /home
  index(req, res, next) {
    // Course.find({}, function(err, courses) {
    //         if (!err) {
    //             res.json(courses);
    //         } else {
    //             next(err);
    //         }

    //     }) -> c1

    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.render('home');
  }

  // GET /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController(); //Tạo ra 1 NewsController rồi export ra ngoài

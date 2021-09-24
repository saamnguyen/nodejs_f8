const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
  // GET /me/stored/courses
  storedCourses(req, res) {
    res.send('Hello Word');
  }
}

module.exports = new MeController(); //Tạo ra 1 NewsController rồi export ra ngoài

const { mutipleMongooseToOject } = require('../../util/mongoose');
const Course = require('../modules/Course');

class SiteController {
  //GET /
  index(req, res, next) {
    Course.find({})
      .then(course =>
        res.render('home', {
          courses: mutipleMongooseToOject(course),
        }),
      )
      .catch(next);
  }

  //GET /search
  search(req, res) {
    res.send('Search');
  }
}

module.exports = new SiteController();

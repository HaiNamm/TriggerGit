const { mutipleMongooseToOject } = require('../../util/mongoose');
const Course = require('../modules/Course');

class MeController {
  //GET /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })])
    .then(([courses, deletedCount]) =>
      res.render('me/stored-courses', {
        deletedCount,
        courses: mutipleMongooseToOject(courses)
      })
    )
    .catch(next);
  }

  //GET /me/trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true})
    .then(course => res.render('me/trash-courses', {
      courses: mutipleMongooseToOject(course)
    }))
    .catch(next);
  }
}

module.exports = new MeController();

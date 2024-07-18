const { default: mongoose } = require('mongoose');

module.exports = {
  mutipleMongooseToOject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};

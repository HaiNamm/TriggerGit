const mongoose = require('mongoose');
const slugUpdater = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, require: true, },
  description: { type: String, maxLength: 600 },
  image: { type: String },
  videoId: { type: String, require: true, },
  level: { type: String },
  slug: { type: String, slug: "name", unique: true },
}, {
  timestamps: true,
});


//Add plugins
mongoose.plugin(slugUpdater);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);

const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  name: String,
  text: String,
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
 
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  name: String,
  text: String,
  saved: [{type: 'ObjectId', ref: 'Post'}]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

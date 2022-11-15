const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  password: Number,
  post: [{type: 'ObjectId', ref: 'Post'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
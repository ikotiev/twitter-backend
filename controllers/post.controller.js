const Post = require('../models/Post.model');

module.exports.postController = {
  postPosts: (req, res) => {
    Post.create({
        user: req.body.user,
        name: req.body.name,
        comment: req.body.name
    }).then((cat) => {
        res.json(cat)
    })
  },
  getPosts: (req, res)=>{
    postMessage.find()
    .populate("Likes")
    .then((a) => {
      res.json(a);
    });
  },
  deletePost: function (req, res) {
    Post.findByIdAndRemove(req.params.ReviewId).then(() => {
      res.json('deleted');
    });
  },
  getAllPost: (req, res) => {
    Post.find({}).then((post) => {
      res.json(post)
    })
  },

  updatePost: (req, res) => {
    Post.findByIdAndUpdate(req.params.ReviewId).then(() => {
      res.json('updated');
    });
  },

  addLike: (req, res) =>{
    postMessage.findByIdAndUpdate(
      {_id: req.params.id},
      { $push: {likes:req.body.likes}},
      {new: true}
    ).then((like)=>{
      res.json(like);
    })
  }

};
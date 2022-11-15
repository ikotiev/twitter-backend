const Comment = require('../models/Comment.model');

module.exports.commentController = {
    postCommet: (req, res) => {
        Comment.create({
            user: req.body.name,
            text: req.body.text
       }).then((comment) => {
            res.json(comment)
        })
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.commentId).then(() => {
            res.json('Комментарий удален!')
        })
    },
    getAllCommentByIdcat: (req, res) => {
        Comment.find({comment: req.params.commentId}, {}).then((comment) => {
            res.json(comment)
        })
    }
    
}
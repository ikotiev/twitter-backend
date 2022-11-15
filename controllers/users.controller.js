const User = require('../models/User.model');

module.exports.UsersController = {
    postUser: (req, res) => {
        User.create({
            name: req.body.name,
            surname: req.body.surname,
            nickname: req.body.nickname
        }).then((user) => {
            res.json(user)
        })
    },
    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.newsId).then(() => {
            res.json('пользователь удален')
        })
    },
    getAllUsers: (req, res) => {
        User.find({}).then((user) => {
            res.json(user)
        })
    },
    getFindByID: (req, res) => {
        User.findById(req.params.newsId).then((user) => {
            res.json(user)
        })
    },

}

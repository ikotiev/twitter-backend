const { Router } = require('express');

const router = Router();

router.use('mments/co',require('./comments.route'))
router.use('/users',require('./users.route'));
router.use('/posts',require('./posts.route'));

module.exports = router;


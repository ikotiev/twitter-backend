const { Router } = require('express');
const router = Router();
const {postController} = require('../controllers/post.controller');

router.post('/create', postController.postPosts);
router.delete('/:postId', postController.deletePost);
router.get('/find', postController.getAllPost);
router.get('/allposts', postController.getPosts );


module.exports = router
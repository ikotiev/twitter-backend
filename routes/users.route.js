const { Router } = require('express');
const {UsersController} = require('../controllers/users.controller');

const router = Router();

router.post('/user', UsersController.postUser );
router.delete('/user/:Id', UsersController.deleteUser );
router.get('/users', UsersController.getAllUsers );
router.get('/user/:Id', UsersController.getFindByID );


module.exports = router;

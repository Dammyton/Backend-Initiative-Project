const express = require('express');
const User = require('../controllers/userController');

const router = express.Router();

router.get('/users', User.getUsers);
router.get('/users/:id', User.getUserById);
router.post('/users/create', User.createNewUser);
router.put('/users/update/:id', User.updateUser);
router.delete('/users/delete/:id', User.deleteUser);

module.exports = router;
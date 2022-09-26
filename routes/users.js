const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const { getUsers, postUser, getUserById, deleteUser, updateUser} = require('../controllers/users')

let users = []

router.get('/', getUsers) 

router.post('/', postUser)

// /users/:id => req.params {id} 
router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

module.exports = router;
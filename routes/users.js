const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = []

router.get('/', (req,res,next) => {
    res.send(users);
}) 

router.post('/', (req,res,next) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`Username ${user.firstName} added to database`);
})

// /users/:id => req.params {id} 
router.get('/:id', (req,res,next) => {
    const { id } = req.params;

    const findUsers = users.find((user) => user.id === id);

    res.send(findUsers);
});

router.delete('/:id', (req,res,next) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`Username ${id} delete from database`)
});

router.patch('/:id', (req,res,next) => {
    const { id } = req.params;
    const { firstName,lastName,age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName,lastName,age) {
        user.firstName = firstName;
        user.lastName = lastName;  
        user.age = age;
    }

    res.send(`User with id ${id} updated successfully`);
})

module.exports = router;
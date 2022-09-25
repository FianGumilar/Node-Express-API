const express = require('express');

const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res, next) => {
    res.send("Hello From Home Page");
})

app.listen(3000, () => console.log('listening on port: http://localhost:3000'));
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controller/userController');
const auth = require('./auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/users', userController.getAllUsers);
app.post('/users', userController.createUser);
app.post('/login', auth.login);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
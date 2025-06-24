const userModel = require('../model/userModel');
const utils = require('../utils');

function getAllUsers(req, res) {
    const role = req.query.role;
    userModel.getUsersByRole(role, (err, result) => {
        if (err) {
            res.status(500).send("Erreur serveur");
        } else {
            userView.renderUsers(res, result);
        }
    });
}

function createUser(req, res) {
    const { username, password } = req.body;

    if (!username || username.trim() === "") {
        res.status(400).send("Nom d'utilisateur invalide");
        return;
    }

    userModel.insertUser(username, password, (err) => {
        if (err) {
            res.status(500).send("Erreur création utilisateur");
        } else {
            res.send("Utilisateur créé !");
        }
    });
}

module.exports = { getAllUsers, createUser };

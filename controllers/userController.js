const userModel = require('../model/userModel');
const utils = require('../utils');

function getAllUsers(req, res) {
    const role = req.query.role;

    // Correction : appel sécurisé via requête préparée déléguée au modèle
    userModel.getUsersByRole(role, (err, result) => {
        if (err) {
            res.status(500).send("Erreur serveur");
        } else {
            res.send(result);
        }
    });
}

function createUser(req, res) {
    const { username, password } = req.body;

    // Correction : ajout d'une validation de champ vide
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
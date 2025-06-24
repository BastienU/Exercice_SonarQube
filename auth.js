function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // Correction : ajout de la vérification des champs requis
    if (!email || !password) {
        res.status(400).send("Champs requis");
        return;
    }

    // Remarque : mot de passe en clair à remplacer par un système de hachage sécurisé
    if (email === "admin@example.com" && password === "123456") {
        res.send("Connecté");
    } else {
        res.status(401).send("Identifiants invalides");
    }
}

module.exports = { login };
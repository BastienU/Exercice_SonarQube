# Étape 1 : Identification manuelle des problèmes

## Objectif

Ce rapport présente les bugs cachés, les code smells et les failles de sécurité. Puis nous affichons les actions de correction effectuées.  
Une analyse manuelle a été réalisée sur les fichiers suivants :
- `controllers/userController.js`
- `auth.js`
- `utils.js`

---

## Tableau des anomalies détectées et actions de correction

| Fichier | Problème identifié | Type | Action de correction |
|---------|---------------------|------|------------------------|
| userController.js | `if(username = "")` → affectation au lieu de comparaison | Bug | Remplacé par `if (username === "")` |
| userController.js | Construction dynamique de requête SQL avec `req.query.role` | Faille de sécurité | Remplacé par une requête préparée dans `userModel.js` |
| userController.js | Deux logs identiques `console.log("Création d’un utilisateur...")` | Code dupliqué | Suppression d’une des deux logs |
| auth.js | Mot de passe écrit en clair dans le code (`123456`) | Faille de sécurité | À corriger avec un système de hachage comme bcrypt |
| auth.js | Aucune validation de format pour email ou password | Faille de sécurité | Ajout d’une vérification simple : les champs ne peuvent pas être vides |
| utils.js | Fonction `logInfo()` dupliquée | Duplication | Suppression d’une des deux logs |
| utils.js | Fonction `calculate()` non utilisée | Code inutilisé | À supprimer ou à commenter si elle sera utilisée plus tard |

---

## Actions de correction

- Refactorisation des fonctions du contrôleur pour réduire la duplication et améliorer la lisibilité.
- Correction d’un bug de logique (`=` au lieu de `===`).
- Sécurisation de la requête SQL par passage via un modèle et une requête paramétrée.
- Suppression des fonctions redondantes dans `utils.js`.
- Simplification du code de `auth.js`, avec détection de cas d’usage incomplets ou dangereux.

---

## Résultat attendu avec SonarQube

Une fois l’analyse SonarQube lancée, on s’attend à :
- Réduction des alertes de type **Bug**, **Code Smell** et **Security Vulnerability**
- Meilleur score de maintenabilité
- Code plus clair et prêt à être intégré dans une base saine

---

## ✅ Conclusion

L’analyse manuelle a permis de repérer plusieurs problèmes courants liés à la qualité et à la sécurité du code.  
La correction de ces problèmes a été faite avec attention afin de produire un code plus maintenable, sécurisé et lisible.  
L’étape suivante consistera à valider ces corrections via SonarQube et, si possible, automatiser cette vérification avec un pipeline CI.
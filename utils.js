// Correction : suppression de la fonction logInfo() dupliquée
function logInfo(message) {
    console.log("INFO: " + message);
}

// Code actuellement inutilisé
function calculate(a, b) {
    return a + b;
}

module.exports = { logInfo, calculate };
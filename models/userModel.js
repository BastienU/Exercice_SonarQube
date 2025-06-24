
const db = require('../fakeDb');

function getUsersByRole(role, callback) {
    const sql = "SELECT * FROM users WHERE role = ?";
    db.query(sql, [role], callback);
}

function insertUser(username, password, callback) {
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], callback);
}

module.exports = { getUsersByRole, insertUser };
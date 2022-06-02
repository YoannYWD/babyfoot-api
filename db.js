//Création d'un client pour gérer la base de données

const Client = require('pg').Pool;

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Admin',
    database: 'babyfoot'
});

module.exports = client;



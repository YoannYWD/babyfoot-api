//Création d'un client pour gérer la base de données

const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5433,
    password: 'Admin',
    database: 'babyfoot'
})

client.connect()


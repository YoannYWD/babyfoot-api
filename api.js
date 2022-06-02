//On utilise la connexion client créée vers la base de données
require('./models/dbConnection')

//On crée notre serveur
const express = require('express')
const app = express()
const port = 8000;

app.get('/', (req, res) => {

    res.send('Hello Mapal!')
})
app.listen(port, () => {
    console.log('App listening on port : ' + port)
})



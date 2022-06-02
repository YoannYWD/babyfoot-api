const express = require('express');
const { Socket } = require('socket.io');
const gamesRoutes = require('./src/gamesRoutes');
const messagesRoutes = require('./src/messagesRoutes');

//On crée notre serveur
const app = express();
const port = 8000;

//Ajout de socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

//Connexion socket
io.on('connection', (socket) => {
    console.log(`Connected to client ${socket.id}`)
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
    next();
});
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Mapal!');
});

//Routes de l'api
app.use('/api/games', gamesRoutes);
app.use('/api/messages', messagesRoutes);

app.listen(port, () => {
    console.log('Babyfoot app running on port : ' + port);
});


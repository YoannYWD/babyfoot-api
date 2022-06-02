const client = require('../db');
const queries = require('./queries');

//TOUS LES MATCHS
const getGames = (req, res) => {
    client.query(queries.getGames, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//UN MATCH EN PARTICULIER
const getGameById = (req, res) => {
    //On récupère d'abord l'id dans l'URL
    const id = parseInt(req.params.id);

    client.query(queries.getGameById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//AJOUTER UN MATCH
const addGame = (req, res) => {
    //On récupère d'abord l'object dans le corps de la requête
    const { player1, player2, in_progress } = req.body;

    //Ajout du match
    client.query(queries.addGame, [player1, player2, in_progress], (error, results) => {
        if (error) throw error;
        res.status(201).send('Game created successfully!');
    })
};

//METTRE A JOUR UN MATCH
const updateGame = (req, res) => {
    //On récupère d'abord l'id dans l'URL
    const id = parseInt(req.params.id);
    //On récupère le statut dans le corps de la requête
    const { in_progress } = req.body;
    //On vérifie que la partie existe
    client.query(queries.getGameById, [id], (error, results) => {
        const noGameFound = !results.rows.length;
        if (noGameFound) {
            res.send('Game doesn\'t exist in the database');
        }
        //Si elle existe on la met à jour
        client.query(queries.updateGame, [in_progress, id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Game updated successfully!')
        })
    })
};

//SUPPRIMER UN MATCH
const deleteGame = (req, res) => {
    //On récupère d'abord l'id dans l'URL
    const id = parseInt(req.params.id);
    //On vérifie que la partie existe
    client.query(queries.getGameById, [id], (error, results) => {
        const noGameFound = !results.rows.length;
        if (noGameFound) {
            res.send('Game doesn\'t exist in the database');
        }
        //Si elle existe, on la supprime
        client.query(queries.deleteGame, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('Game deleted successfully!')
        })
    })
};

//TOUS LES MESSAGES
const getMessages = (req, res) => {
    client.query(queries.getMessages, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

//AJOUTER UN MATCH
const addMessage = (req, res) => {
    //On récupère d'abord l'object dans le corps de la requête
    const { author, message } = req.body;

    //Ajout du match
    client.query(queries.addMessage, [author, message], (error, results) => {
        if (error) throw error;
        res.status(201).send('Message created successfully!');
    })
};


module.exports = {
    getGames,
    getGameById,
    addGame,
    deleteGame, 
    updateGame,
    getMessages,
    addMessage
};


const express = require('express');
const app = express();

app.use((req, res, next )=> { 
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next)=> {
    res.status(201);
    next();
});

app.use((req, res, next) => { 
    res.json({
        message:'la requette à bien été reçue',});
        next();
});

app.use((req, res, next) => { 
    console.log('Réponse envoyée avec succès !');
    next();
});

module.exports = app;
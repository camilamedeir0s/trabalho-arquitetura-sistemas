const express = require('express');
const app = express();
const conversor = require('./conversor');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá mundo');
})

app.get('/converter', conversor.converter);

app.listen(8081, () => {
    console.log('Servidor rodando.')
})

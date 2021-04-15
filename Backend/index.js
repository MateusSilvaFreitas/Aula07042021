const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(request, response) => {
    console.log(request.query);
    return response.send('Olá mundo');
});

app.get('/userario/:id',(request, response) => {
    console.log(request.body);
    return response.json({
        id: 2,
        nome: "Dane"
    });
});

app.get('/produto', (request, response) => {
    console.log(request.body);
    return response.json({
        nome: 'Luiz',
        idade: 19
    });
});

app.listen(3333);
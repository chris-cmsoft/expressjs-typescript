const express = require('express');
const app = express();
const {Library} = require('../models/library');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, resp) => {
    return resp.json({});
});

app.get('/libraries', async (request, response) => {
    const libraries = await Library.findAll();

    return response.json(libraries);
});

app.post('/libraries', async (request, response) => {
    console.log(request.body.foo);
    const { name } = request.body;
    const library = await Library.create({
        name,
    });
    return response.json(library);
});

module.exports = app;